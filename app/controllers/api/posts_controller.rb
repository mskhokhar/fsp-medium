class Api::PostsController < ApplicationController
    def new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def index
        @posts = Post.includes(:author).includes(:likes).order(updated_at: :desc).all
        @popular_posts = Post.joins(:likes).order("count(likes.id) desc").group(:id).limit(5)
        user = User.find_by(username: 'starwars_01')
        @editor_picks = user.liked_posts.limit(5)
    end

    def show
        @post = Post.includes(:likes).find(params[:id])
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.delete
            render json: 'Post deleted successfully', status: 200
        else
            render json: @post.errors.full_messages, status: 422 
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    

    private
    def post_params
        params.require(:post).permit(:title, :body, :category_id, :author_id, :picture)
    end
end
