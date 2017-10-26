class Symptom < ApplicationRecord
  belongs_to :user
  has_many :reactions, dependent: :destroy
  has_many :reaction_logs, through: :reactions
  has_many :ingredients, -> { distinct }, through: :reactions do
    def acute
      where("reactions.reaction_type = 'acute'")
    end

    def extended
      where("reactions.reaction_type = 'extended'")
    end
  end

  validates :description, presence: true

  def reactions_attributes=(reaction_attributes)
    self.reactions.each do |reaction|
      reaction.update(reaction_attributes)
    end
  end

  def ingredients_attributes=(attributes)
    return if self.persisted? # currently not allowing this to update
    set_user_id(attributes) && set_occurred_at(attributes)
    set_acute_triggers && set_extended_triggers
  end

  def reaction_logs=(_attributes)
    self.reactions.each do |reaction|
      reaction.reaction_logs.create(occurred_at: @occurred_at)
    end
  end

  def set_extended_triggers
    extended_meals.each do |meal|
      meal.ingredients.each do |ingredient|
        self.ingredients << ingredient
        self.reactions.last.update(reaction_type: 'extended')
      end
    end
  end

  def set_acute_triggers
    acute_meals.each do |meal|
      meal.ingredients.each do |ingredient|
        self.ingredients << ingredient
      end
    end
  end

  def acute_meals
    Meal.for_user(user).created_within(@occurred_at - 4.hour, @occurred_at)
  end

  def extended_meals
    Meal.for_user(user).created_within(@occurred_at - 3.day, @occurred_at)
  end

  def set_occurred_at(attributes)
    hours = attributes['occurred_at'].to_f
    @occurred_at = Time.current.ago(hours.hour)
  end

  def set_user_id(attributes)
    self.user_id = attributes['current_user_id']
  end
end
