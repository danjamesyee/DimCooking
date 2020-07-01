
json.extract! @recipe, :id, :title, :summary, :ingredients, :preparation, :idx
json.photoUrl url_for(@recipe.photo)

