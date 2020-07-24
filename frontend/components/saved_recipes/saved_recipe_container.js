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
    recipes: state.entities.recipes,
    currentUser: state.entities.users[state.session.id],
    savedRecipes: state.entities.savedRecipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSavedRecipes: () => dispatch(fetchSavedRecipes()),
    deleteSavedRecipe: (savedRecipeId) =>
      dispatch(deleteSavedRecipe(savedRecipeId)),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SavedRecipePage)
);
