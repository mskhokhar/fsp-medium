json.extract! post, :id, :author_id, :title, :body, :category_id, :updated_at
json.photoUrl url_for(post.picture)