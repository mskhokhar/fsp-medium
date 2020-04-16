Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show]
    resource :session, only: [:destroy, :create]
    resources :posts, only: [:show, :index, :create, :new, :destroy, :update]
    resources :categories, only: [:show, :index, :create]
    resources :likes, only: [:destroy, :create, :index, :show]
    resources :followers, only: [:destroy, :create, :index, :show]
    resources :comments, only: [:create, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
