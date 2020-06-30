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


export const createSavedRecipe = (savedRecipe) => (
    $.ajax({
        url: '/api/saved_recipes',
        method: 'POST',
        data: { savedRecipe }
    })
);

export const updateSavedRecipe = (savedRecipe) => (
    $.ajax({
        url: `/api/saved_recipes/${savedRecipe.id}`,
        method: 'PATCH',
        data: { savedRecipe }
    })
);

export const deleteSavedRecipe = (savedRecipeId) => (
    $.ajax({
        url: `/api/saved_reicipes/${savedRecipeId}`,
        method: 'DELETE'
    })
);

