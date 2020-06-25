class RecipeItoArray < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :ingredients_arr, :text, array: true, default: []
  end
end
