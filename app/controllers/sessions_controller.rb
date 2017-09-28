class SessionsController < ApplicationController
  def create
  	@user = User.find_or_create_from_auth_hash(auth)
  	session[:user_id] = @user.id    
    
  	redirect_back fallback_location: 'http://localhost:3000'
  end

  def test    
    redirect_to '/auth/facebook'
  end  

  def destroy
  	session[:user_id] = nil
  	redirect_to root_path
  end

  def auth
    request.env['omniauth.auth']
  end

end