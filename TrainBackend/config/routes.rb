Rails.application.routes.draw do
  resources :trains
  get 'train_details/:trainNumber', to: 'trains#trainDetails'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
