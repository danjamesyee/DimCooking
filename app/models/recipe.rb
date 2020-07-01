class Recipe < ApplicationRecord

    validates :title, :summary, :ingredients, :preparation, :author_id, presence: true

    belongs_to :user,
    foreign_key: :author_id

    has_many :saved_recipes

    has_many :cookingnotes,
        foreign_key: :recipe_id

    has_one_attached :photo
end
