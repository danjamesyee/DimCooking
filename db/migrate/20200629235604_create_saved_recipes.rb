class CreateSavedRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_recipes do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.boolean :cooked, null: false
      
      t.timestamps
    end
  end
end
