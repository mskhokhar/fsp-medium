json.set! categories do
    @categories.each do |category|
        json.extract! category.id, :id, :name, :subtitle
    end
end