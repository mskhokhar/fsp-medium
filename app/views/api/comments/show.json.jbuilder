json.comment do 
    json.partial! "show", comment: @comment
end
json.post do 
    json.partial! '/api/posts/show', post: @comment.post
end