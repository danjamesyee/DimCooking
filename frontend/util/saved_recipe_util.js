export const fetchSavedRecipes = () => (
    $.ajax({
        url: '/api/saved_recipes',
        method: 'GET'
    })
);

export const fetchSavedRecipe = (savedRecipeId) => (
    $.ajax({
        url: `/api/saved_recipes/${savedRecipeId}`,
        method: 'GET'
    })
);


export const createSavedRecipe = (saved_recipe) => {
    return $.ajax({
        url: '/api/saved_recipes',
        method: 'POST',
        data: { saved_recipe }
    });
};

export const updateSavedRecipe = (saved_recipe) => (
    $.ajax({
        url: `/api/saved_recipes/${saved_recipe.id}`,
        method: 'PATCH',
        data: { saved_recipe }
    })
);

export const deleteSavedRecipe = (savedRecipeId) => (
    $.ajax({
        url: `/api/saved_recipes/${savedRecipeId}`,
        method: 'DELETE'
    })
);

