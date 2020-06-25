class AddPreparationArr < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :preparation, :text, array: true, default: []
  end
end
