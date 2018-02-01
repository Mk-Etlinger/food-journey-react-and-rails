Rails.application.routes.draw do
  root 'application#index'
  get 'dashboard', to: 'dashboard#index'
  get 'login', to: 'sessions#login'
  get 'recent_meals', to: 'meals#recent'
  get 'recent_symptoms', to: 'symptoms#recent'
  get 'most_symptomatic_ingredients', to: 'symptoms#most_symptomatic_ingredients'
  
  resources :symptoms
  resources :meals do
    resources :ingredients, only: [:index]
  end

  post 'user_token' => 'user_token#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
