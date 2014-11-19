class CommentsController < ApplicationController

  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    render json: Comment.all, status: 200
  end

  def show
    render json: @comment.to_json, status: 200
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    render json: @comment.to_json, status: 200 if @comment.save
  end

  def update
    render json: @comment.to_json, status: 200 if @comment.update(comment_params)
  end

  def destroy
    render json: @comment.to_json if @comment.destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end
  
  def prediction_params
    params.require(:comment).permit(:body,:commenter)
  end
end