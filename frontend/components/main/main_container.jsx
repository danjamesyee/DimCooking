import MainPage from "./main";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipe_actions";

const mstp = (state) => ({
  recipes: Object.values(state.entities.recipes),
});

const mdtp = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mstp, mdtp)(MainPage);
