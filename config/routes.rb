Rails.application.routes.draw do
  root 'application#index'
  get 'dashboard', to: 'dashboard#index'
  resources :meals do
    resources :ingredients, only: [:index]
  end

  resources :symptoms
  
  # devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # get '/ingredients/safe', to: 'ingredients#safe'
  # post '/ingredients/mark_safe', to: 'ingredients#mark_safe'

  # get '/users/:id/meals/new', to: 'meals#new', as: 'nested_new_meal'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
