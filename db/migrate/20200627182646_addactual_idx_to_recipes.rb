class AddactualIdxToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :idx, :integer
  end
end
