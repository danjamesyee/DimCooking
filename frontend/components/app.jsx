import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import NotFound from "./routes/notFoundPage";
import MainPage from "./main/main_container";
import RecipePage from "./recipe/recipe_container";
import Footer from "./footer";
import SavedRecipeContainer from "./saved_recipes/saved_recipe_container";
import Search from "../components/search_bar/search_container";

const App = () => (
  <div className="cheese">
    <Modal />

    <div className="main-nav">
      <div className="hider">
        <Link to="/" className="main-title" style={{ textDecoration: "none" }}>
          <strong>點 | Dim Cooking</strong>
        </Link>
      </div>
      

      <Search />
      <GreetingContainer className="greeting" />
    </div>

    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/recipes/:recipeId" component={RecipePage} />
      <Route path="/saved_recipes" component={SavedRecipeContainer} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
