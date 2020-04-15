class Api::LikesController < ApplicationController
   
    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        @likes = current_user.likes;
    end

    def show
        @like = Like.find(params[:id])
    end

    def destroy
        @like = Like.find(params[:id])
        @like.delete
        render :show
    end
    

    private
    def like_params
        params.require(:like).permit(:liker_id, :post_id)
    end
end
