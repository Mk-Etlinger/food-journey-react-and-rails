Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, 
            ENV["FACEBOOK_API_KEY"], 
            ENV["FACEBOOK_API_SECRET"], 
            callback_url: "http://localhost:3001/auth/facebook/callback"
end
