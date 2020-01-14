class Api::PostsController < ApplicationController
      def new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            login(@post)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def index
        @posts = Post.includes(:author).includes(:likes).all
    end

    def show
        @post = Post.includes(:likes).find(params[:id])
        
    end
    

    private
    def post_params
        params.require(:post).permit(:title, :body, :category_id)
    end
end
