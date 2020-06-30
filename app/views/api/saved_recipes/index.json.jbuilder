@saved_recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :user_id, :recipe_id, :cooked
    end
end