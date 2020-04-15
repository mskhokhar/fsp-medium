class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user.nil?
            render json: ['Invalid username or password'], status: 401
        else
            login(@user)
            @followings = @user.followings
            render :show
        end
    end

    def destroy
        if !current_user
           render json: {},status: 404 
        else
            logout
            render json: { message: 'Logged out successfully.' }
        end
        
    end

end
