json.followers do
    @followers.each do |follower|
        json.set! follower.follow_user_id, follower.user_id
    end
end
json.followings do
    @followings.each do |following|
        json.set! following.follow_user_id, following.user_id
    end
end