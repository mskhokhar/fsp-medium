json.extract! post, :id, :author_id, :title, :body, :category_id
json.photoUrl url_for(post.picture)