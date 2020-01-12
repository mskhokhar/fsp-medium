@categories.each do |category|
    json.set! category.id do 
        json.partial! "show", category: category
    end
end