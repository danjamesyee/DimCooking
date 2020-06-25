class Api::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render :index
    end

    def create
        @recipe = Recipe.new(recipe_params)
        @recipe.author_id = current_user.id
        if @recipe.save
            render :show
        else
            render json: ['Recipe not created, try again!'], status: 400
        end
    end

    def update
        @recipe = Recipe.find(params[:id])
        @recipe.update(recipe_params)
        if @recipe.save
            render :show
        else
            render json: @recipe.errors.full_messages, status: 400
        end
    end

    def show
        @recipe = Recipe.find(params[:id])
    end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy if @recipe
    
        render :show
    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :summary, :ingredients, :preparation)
    end
end
