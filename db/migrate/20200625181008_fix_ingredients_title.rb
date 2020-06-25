class FixIngredientsTitle < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :ingredients_arr, :ingredients
  end
end
