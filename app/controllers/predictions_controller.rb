class PredictionsController < ApplicationController

  before_action :set_prediction, only: [:show, :update, :destroy]

  def index
    render json: Prediction.all, status: 200
  end

  def show
    render json: @prediction.to_json, status: 200
  end

  def new
    @prediction = Prediction.new
  end

  def create
    @prediction = Prediction.new(prediction_params.merge(user: current_user))
    render json: @prediction.to_json, status: 200 if @prediction.save
  end

  def update
    render json: @prediction.to_json, status: 200 if @prediction.update(prediction_params)
  end

  def destroy
    render json: @prediction.to_json if @prediction.destroy
  end

  private

  def set_prediction
    @prediction = Prediction.find(params[:id])
  end
  
  def prediction_params
    params.require(:prediction).permit(:body,:tags,:upvotes,:downvotes)
  end
end