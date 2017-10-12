Rails.application.routes.draw do
  root 'application#index'
  get 'dashboard', to: 'dashboard#index'
  get 'login', to: 'sessions#login'
  get 'auth/facebook/callback', to: 'sessions#create'
  get 'recent_meals', to: 'meals#recent'
  get 'recent_symptoms', to: 'symptoms#recent'
  get 'most_symptomatic_ingredients', to: 'symptoms#most_symptomatic_ingredients'
  resources :meals do
    resources :ingredients, only: [:index]
  end

  resources :symptoms

  Rails.application.routes.draw do    
    resources :meals
    post 'user_token' => 'user_token#create'
  end  
  

  # devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # get '/ingredients/safe', to: 'ingredients#safe'
  # post '/ingredients/mark_safe', to: 'ingredients#mark_safe'  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
