class Like < ApplicationRecord
    #for users liking the associated post
    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User
    #for post   
    belongs_to :post
end
