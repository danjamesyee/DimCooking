export const fetchRecipes = () => (
    $.ajax({
        url: '/api/recipes',
        method: 'GET',
    })
);

export const fetchRecipe = recipeId => (
    $.ajax({
        url: `/api/recipes/${recipeId}`
    })
);


