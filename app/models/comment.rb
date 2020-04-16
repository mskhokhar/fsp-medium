class Comment < ApplicationRecord
    #for post
    belongs_to :post

    #for author of the comment
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
