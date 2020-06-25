class FixRecipesReal < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :ingredients
    remove_column :recipes, :preparation
  end
end
