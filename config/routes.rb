Rails.application.routes.draw do
  resources :quiz_questions, only: [:create, :show]
  resources :questions, only: [:create, :show, :index]
  resources :quizzes, only: [:create]
  resources :users, only: [:create, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  patch "/increment", to: "users#increment"
  patch "/decrement", to: "users#decrement"

  # test route for cookies at http://localhost:3000/test
  get "/test", to: "application#cookie_test"
end
