json.set! posts do
    @posts.each do |post|
        json.extract! post.id, :id, :author_id, :title, :body, :photo_url, :category_id
    end
end