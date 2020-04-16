class Api::FollowersController < ApplicationController
   
    def create
        @follower = Follower.new(following_params)
        if @follower.save
            render :show
        else
            render json: @follower.errors.full_messages, status: 422
        end
    end

    def index
        @followers = Follower.all.where(["follow_user_id = :follow_user_id ", { follow_user_id: current_user.id }])
        for follower in @followers do
            puts follower.id
        end
        # @followings = current_user.followings;
    end

    def destroy
        @follower = Follower.find(params[:id])
        @follower.delete
        render :show
    end
    

    private
    def following_params
        params.require(:follower).permit(:user_id, :follow_user_id)
    end
end
