 @comments.each do |comment|
        json.set! comment.user_id do
            json.partial! "show", comment: comment
        end
    end