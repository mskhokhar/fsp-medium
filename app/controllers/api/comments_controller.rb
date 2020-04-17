class Api::CommentsController < ApplicationController
   
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.all
    end

    

    private
    def comment_params
        params.require(:comment).permit(:author_id, :post_id, :body)
    end
end
