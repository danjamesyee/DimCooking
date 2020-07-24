import React from "react";
import { Link } from "react-router-dom";

class SavedRecipePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchSavedRecipes(this.props.currentUser.id);
    this.props.fetchRecipes();
  }

  deleteSavedRecipe(savedRecipeId) {
    this.props.deleteSavedRecipe(savedRecipeId);
  }

  render() {
    // debugger;
    if (!this.props.recipes || !this.props.savedRecipes) return null;
    const { currentUser, savedRecipes } = this.props;

    let savedRecipesOfUser = Object.values(savedRecipes).filter(
      (savedRecipe) => savedRecipe.user_id === currentUser.id
    );
    let recipeIds = savedRecipesOfUser.map((sr) => sr.recipe_id);
    let recipes = Object.values(this.props.recipes).filter((recipe) =>
      recipeIds.includes(recipe.id)
    );
    return (
      <div className="saved-recipes">
        <h2>Saved Recipes</h2>
        <h4>{recipes.length} recipes</h4>
        <div className="flex-recipes">
          {recipes.map((recipe, idx) => (
            <div className="saved-outer-box" key={recipe.id}>
              <div className="saved-recipe-box">
                <div key={idx}>
                  <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                    <img
                      className="saved-photo"
                      src={recipe.photoUrl}
                      width="250px"
                      height="160px"
                    />

                    <br />
                    <h5>{recipe.title}</h5>
                  </Link>
                  <button
                    className="save-rec-onpage"
                    onClick={() =>
                      this.props.deleteSavedRecipe(
                        savedRecipesOfUser.find(
                          (sr) => sr.recipe_id === recipe.id
                        ).id
                      )
                    }
                  >
                    <img
                      src="https://dimcooking-dev.s3-us-west-1.amazonaws.com/icon-bookmark-hover-fill.png"
                      width="12px"
                      height="18px"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SavedRecipePage;
