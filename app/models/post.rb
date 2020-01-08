class Post < ApplicationRecord
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    #for category
    belongs_to :category

    #for comment
    has_many :comments

    #for likes
    has_many :likes
end
