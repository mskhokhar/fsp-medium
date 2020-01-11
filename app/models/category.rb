class Category < ApplicationRecord
    CATEGORIES = ['business', 'education', 'food', 'health', 'lgbtqiaa','relationships', 'technology', 'work']
    #for posts
    has_many :posts
end
