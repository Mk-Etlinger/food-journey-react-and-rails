class User < ApplicationRecord
  has_many :meals 
  has_many :symptoms

  def self.find_or_create_from_auth_hash(auth)		
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.name = auth.info.name
      user.provider = auth.provider
      user.uid = auth.uid			
      user.image = auth.info.image
      user.save!
		end
	end
  
end
