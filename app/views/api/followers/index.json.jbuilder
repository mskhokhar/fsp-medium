json.followers do
    @followers.each do |follower|
        json.set! follower.user_id do
            json.partial! "show", follower: follower
        end
    end
end


# json.followings do
#     @followings.each do |following|
#         json.set! following.follow_user_id, following.user_id
#     end
# end