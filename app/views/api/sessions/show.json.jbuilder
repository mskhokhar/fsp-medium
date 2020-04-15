json.user do
    json.partial! "api/users/show", user: @user
end
if @followings == nil
    json.following nil
else
    json.followings do 
        @followings.each do |following|
            json.set! followings.id do
                json.extract! following, :follow_user_id
            end
        end
    end
end
