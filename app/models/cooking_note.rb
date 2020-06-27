class CookingNote < ApplicationRecord
    validates :body, :author_id, :recipe_id, presence: true

    belongs_to :user,
        foreign_key: :author_id

    belongs_to :recipe,
        foreign_key: :recipe_id
end
