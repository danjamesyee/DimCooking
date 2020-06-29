json.extract! cookingnote, :id, :body, :author_id, :recipe_id, :created_at
json.username cookingnote.user.username
json.user_id cookingnote.user.id

