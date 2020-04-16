json.authored_posts do 
    json.array! current_user.authored_posts.pluck(:id)
end
json.liked_posts do 
    json.array! current_user.liked_posts.pluck(:id)
end
json.likes do
    current_user.likes.each do |like|
        json.set! like.post_id, like.id
    end
end