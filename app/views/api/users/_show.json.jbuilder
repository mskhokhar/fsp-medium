json.extract! user, :username, :id, :email, :first_name, :last_name
json.authored_posts do 
    json.array! user.authored_posts.pluck(:id)
end
json.liked_posts do 
    json.array! user.liked_posts.pluck(:id)
end
   