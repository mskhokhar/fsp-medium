Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:destroy, :create]
    resources :posts, only: [:show, :index, :create, :new] do
      resources :likes, only: [:create]
    end
    resources :categories, only: [:show, :index, :create]
    resources :likes, only: [:delete]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
