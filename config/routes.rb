Rails.application.routes.draw do
  resources :quiz_questions, only: []
  resources :questions, only: []
  resources :quizzes, only: []
  resources :users, only: []

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # test route for cookies at http://localhost:3000/test
  get "/test", to: "application#cookie_test"
end
