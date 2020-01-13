class Api::UsersController < ApplicationController
    def new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.includes(:authored_posts).find(params[:id])
    end
    

    private
    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :email, :password)
    end
end
