class SavedRecipe < ApplicationRecord
    validates :recipe_id, :user_id, presence: true
    validates :cooked, inclusion: {in: [true, false]}

    belongs_to :user,
        foreign_key: :user_id

    belongs_to :recipe,
        foreign_key: :recipe_id
end
