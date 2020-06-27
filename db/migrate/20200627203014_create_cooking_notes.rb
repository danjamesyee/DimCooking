class CreateCookingNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :cooking_notes do |t|
      t.string :body, null: false
      t.integer :author_id
      t.integer :recipe_id

      t.timestamps
    end
    add_index :cooking_notes, :author_id
    add_index :cooking_notes, :recipe_id
  end
end
