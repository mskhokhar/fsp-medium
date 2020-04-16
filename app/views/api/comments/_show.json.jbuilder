json.extract! comment, :id, :body, :author_id, :post_id
time = comment.created_at.to_formatted_s(:long)
json.created_at time.slice(0,time.length-6)
