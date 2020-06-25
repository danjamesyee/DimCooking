class Removeingredientsfromrecipes < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :ingredients, :text
  end
end
