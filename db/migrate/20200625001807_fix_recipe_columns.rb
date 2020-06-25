class FixRecipeColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :ingredients, :text
    add_column :recipes, :preparation, :text
  end
end
