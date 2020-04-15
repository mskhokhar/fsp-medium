class Follower < ApplicationRecord
    #person who is being followed
    belongs_to :user

    #person who is following 
    belongs_to :follower_user,
        foreign_key: :follow_user_id,
        class_name: :User
end
