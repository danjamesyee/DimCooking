export const fetchRecipes = data => (
    $.ajax({
        url: '/api/recipes',
        method: 'GET',
        data
    })
);

export const fetchRecipe = recipeId => (
    $.ajax({
        url: `/api/recipes/${recipeId}`
    })
);


