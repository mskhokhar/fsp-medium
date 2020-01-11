json.extract! user, :username, :id, :email
json.authored_posts do 
    json.array! user.authored_posts.pluck(:id)
end
   