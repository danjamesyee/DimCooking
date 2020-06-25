import MainPage from './main';
import { connect } from 'react-redux';
import { fetchRecipe, fetchRecipes} from '../../actions/recipe_actions';

const mstp = ({ recipes }) => ({
    recipes: Object.values(recipes)
})

const mdtp = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mstp, mdtp)(MainPage);