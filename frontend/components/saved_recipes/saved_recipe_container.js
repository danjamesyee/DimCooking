import { connect } from "react-redux";
import SavedRecipePage from "./saved_recipe_page";
import {
  fetchSavedRecipes,
  deleteSavedRecipe,
} from "../../actions/saved_recipe_actions";
import { fetchRecipes } from "../../actions/recipe_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    savedRecipes: state.entities.savedRecipes,
    recipes: state.entities.recipes,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSavedRecipes: () => dispatch(fetchSavedRecipes()),
  deleteSavedRecipe: (savedRecipeId) =>
    dispatch(deleteSavedRecipe(savedRecipeId)),
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SavedRecipePage)
);
