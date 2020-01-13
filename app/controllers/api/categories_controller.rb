class Api::CategoriesController < ApplicationController

    def create
        @category = Category.new(category_params)
        if @category.save
            login(@category)
            render :show
        else
            render json: @category.errors.full_messages, status: 422
        end
    end
    
    def index
        @categories = Category.all
    end

    def show
        @category = Category.find(params[:id])
        
    end
    

    private
    def category_params
        params.require(:category).permit(:name, :subtitle)
    end
end
