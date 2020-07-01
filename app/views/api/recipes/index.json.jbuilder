@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :summary, :ingredients, :preparation, :idx
        json.photoUrl url_for(recipe.photo)
        json.authorId recipe.author_id
    end
end