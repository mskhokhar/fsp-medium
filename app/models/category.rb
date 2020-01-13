class Category < ApplicationRecord
    CATEGORIES = ['business', 'education', 'food', 'health', 'lgbtqiaa','relationships', 'technology', 'work', 'psychology']
    #for posts
    has_many :posts

    validates :name,
    inclusion: { in: CATEGORIES,
    message: ' is not a valid category' }
end
