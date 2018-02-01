class User < ApplicationRecord
  has_secure_password
  has_many :meals 
  has_many :symptoms

  def self.from_token_request(request)
    # Returns a valid user, `nil` or raise `Knock.not_found_exception_class_name`
    email = request.params["auth"] && request.params["auth"]["email"]
    password = request.params["auth"]["password"]
    user = self.find_by(email:email)
  
    if user
      user
    elsif request.params["auth"]["register"]
      User.create(email: email, password: password)
    else
      nil
    end
  end
  
end
