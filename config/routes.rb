Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resources :recipes, only: [:index, :create, :show]
    resources :cookingnotes
    resources :saved_recipes, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
