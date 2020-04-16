@comments.each do |comment|
    json.set! comment.id do
        json.partial! "show", comment: comment
    end
end