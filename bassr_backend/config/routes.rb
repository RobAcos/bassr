Rails.application.routes.draw do
  resources :user_songs
  resources :users
  resources :albums
  resources :artists
  resources :songs

  post "/login", to: "auth#log_in"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
