class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
      if !User.find_by(username: params[:username])
        user = User.create!(user_params)
        user.tokens = 0
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "An account already exists for this username" }, status: :conflict
      end
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      render json: user, status: :ok
    end

    def update
      user = User.find_by(id: session[:user_id])
      user.update!(user_params)
      render json: user, status: :accepted
    end

    def destroy
      user = User.find_by(id: session[:user_id])
      user.destroy
      head :no_content
    end
  
    private
  
    def user_params
      params.permit(:username, :password)
    end
end