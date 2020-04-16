json.extract! post, :id, :author_id, :title, :body, :category_id
time = post.updated_at.to_formatted_s(:long)
json.updated_at time.slice(0,time.length-6)
if post.picture.attached?
    json.photoUrl url_for(post.picture)
else
    json.photoUrl nil
end
json.post_comments do 
    json.array! post.comments.pluck(:id)
end




 