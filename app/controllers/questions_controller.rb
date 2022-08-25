class QuestionsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Question.all
    end

    def show
        question = Question.find(params[:id])
        render json: question
    end
end
