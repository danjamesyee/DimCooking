class AddIdxToRecipes < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :idx, :integer
  end
end
