class SavedRecipe < ApplicationRecord
    validates :recipe_id, :user_id, :cooked, presence: true
    validates :cooked, inclusion: {in: [true, false]}
    validates :recipe_id, :user_id, uniqueness: true

    belongs_to :user,
        foreign_key: :user_id

    belongs_to :recipe,
        foreign_key: :recipe_id
end
