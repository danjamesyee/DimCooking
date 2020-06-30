class Api::SavedRecipesController < ApplicationController
    def index
        @saved_recipes = SavedRecipes.all
        render :index
    end

    def create
        @saved_recipe = SavedRecipe.new(sr_params)
        @saved_recipe.user_id = current_user.id
        if @saved_recipe.save
            render :show
        else
            render json: ['Couldn\'t save recipe, try again'], status 422
        end
    end

    def show
        @saved_recipe = SavedRecipe.find(params[:id])
    end

    def update
        @saved_recipe = SavedRecipe.find(params[:id])
        if @saved_recipe.update(sr_params)
            render :show
        else
            render json: @recipe.errors.full_messages, status: 400
        end
    end

    def destroy
        @saved_recipe = SavedRecipe.find(params{:id})
        if @saved_recipe
            @saved_recipe.destroy
        end

        render :show
    end

    private

    def sr_params
        params.require(:saved_recipe).permit(:recipe_id, :user_id, :cooked)
    end
end
