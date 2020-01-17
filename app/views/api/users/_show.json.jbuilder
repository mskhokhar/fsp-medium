json.extract! user, :username, :id, :email, :first_name, :last_name
time = user.created_at.to_formatted_s(:long)
json.created_at time.slice(0,time.length-6)
json.authored_posts do 
    json.array! user.authored_posts.pluck(:id)
end
json.liked_posts do 
    json.array! user.liked_posts.pluck(:id)
end
   