
json.extract! @recipe, :id, :title, :summary, :ingredients, :preparation
json.photoUrl url_for(@recipe.photo)

