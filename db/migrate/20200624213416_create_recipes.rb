class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :summary, null: false
      t.string :ingredients, null: false
      t.string :preparation, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :recipes, :title
    add_index :recipes, :summary
    add_index :recipes, :author_id
  end
end
