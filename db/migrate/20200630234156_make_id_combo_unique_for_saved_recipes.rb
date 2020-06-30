class MakeIdComboUniqueForSavedRecipes < ActiveRecord::Migration[5.2]
  def change
    add_index :saved_recipes, [:recipe_id, :user_id], unique: true
  end
end
