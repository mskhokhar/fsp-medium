class Api::LikesController < ApplicationController
   
    def create
        @following = Follower.new(following_params)
        if @following.save
            render :show
        else
            render json: @following.errors.full_messages, status: 422
        end
    end

    def index
        @followers = current_user.followers;
        @followings = current_user.followings;
    end

    def destroy
        @follower = Follower.find(params[:id])
        @follower.delete
        render :show
    end
    

    private
    def following_params
        params.require(:follower).permit(:user_id, :follow_used_id)
    end
end
# if @followings == nil
#     json.following nil
# else
#     json.followings do 
#         @followings.each do |following|
#             json.set! followings.id do
#                 json.extract! following, :follow_user_id
#             end
#         end
#     end
# end
