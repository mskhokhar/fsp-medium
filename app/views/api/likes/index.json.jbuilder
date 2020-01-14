json.likes do
    @likes.each do |like|
        json.set! like.post_id, like.id
    end
end