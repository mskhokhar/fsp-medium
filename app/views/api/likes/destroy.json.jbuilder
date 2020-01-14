json.liked_posts do 
    json.array! current_user.liked_posts.pluck(:id)
end
   