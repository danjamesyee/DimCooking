import { connect } from "react-redux";
import Search from "./search";
import { fetchRecipes } from "../../actions/recipe_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: Object.values(state.entities.recipes),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
