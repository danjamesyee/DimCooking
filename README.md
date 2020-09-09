# dimcooking

[Live Site](https://dimcooking.herokuapp.com/#/)




![Gif of site](https://github.com/danjamesyee/dimcooking/blob/master/app/assets/images/gifofsite.gif?raw=true)


## Background

Dim Cooking is a cooking website centered around Dim Sum while also drawing heavy inspiration from the NYT Cooking website. Users can participate in an online community of Dim Sum enthusiasts using the site to view, save and discuss their methods for cooking these recipes. In order to participate in the community, users can create an account, sign in and even test out the site as a demo user. Once logged in, users can then save recipes to their specific recipe box associated with their account, as well as share cooking notes with other cooks. These notes can also be edited and deleted by the user who created them. 


## Technologies

  * Ruby on Rails
  * React.js
  * Redux.js
  * Node.js
  * PostgreSQL
  * Webpack
  * Amazon AWS S3


## Features

### User Authentication

![Log of site](https://github.com/danjamesyee/dimcooking/blob/master/app/assets/images/login.gif?raw=true)

  * Users can sign up and create an account on Dim Cooking, and login to view saved recipes
  * Login and sign up forms are rendered on modal components made using React.js and CSS
  * Demo login is available to use all features of the site without creating an account
  * Navigation bar displays logout gear dropdown once logged in as well as recipe box button
  
### Splash Landing Page and Recipes Index Carousel

  * Recipe of the day shows as the splash page and links to that recipe
  * All recipes are rendered on images in the carousel
  * Recipes in the carousel are links to that respective recipe's show page
  
  The carousel was created without the use of a library using plain React and CSS.
  ```HTML

        <div className="carousel">
          <div className="buttons-pos">
            <button
              onClick={this.prevRecipe}
              disabled={recipe.idx === 1}
              id="prev"
            >
              &lt;
            </button>
            <button
              onClick={this.nextRecipe}
              disabled={recipe.idx === recipes.length - 1}
              id="next"
            >
              &gt;
            </button>
          </div>

          <div className="col">
            <div className={`cards-slider active-slide-${recipe.idx}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${
                    recipe.idx * (100 / recipes.length)
                  }%)`,
                }}
              >
                {recipes.map((recipe) => (
                  <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                    <div className="caro-container">
                      <img
                        src={recipe.photoUrl}
                        id={`card-${recipe.idx}`}
                        className="card"
                        width="250px"
                        height="170px"
                      />
                      <div className="carousel-title">{recipe.title}</div>
                      <div className="author-name-c">By Daniel Yee</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
 ```
 
 ### Recipe Show and Cooking Notes
 
 ![recipeshow](https://github.com/danjamesyee/dimcooking/blob/master/app/assets/recipeshow.gif?raw=true)
 
   * Users can view each show page
   * Recipes show ingredients, preparation, and save button
   * Nav bar sticks to the top of the page on scroll
   * Cooking notes allow discussion of recipes between users
   * Users can edit and delete their own recipes
   
 ### Saved Recipes
 
 ![recipesave](https://github.com/danjamesyee/dimcooking/blob/master/app/assets/images/saved.gif?raw=true)
 
   * Save button appears on recipe show page
   * Users can access saved recipes and see their own saved recipes
   * Users can save and unsave from show page or saved recipes page
   * Users can only save recipes if logged in
   
 ### Navigation Bar
 
   * The buttons change based on login status
   * Navigation bar sticks to the top of the page
   * Located in it's own component for cleaner formatting
   
```Javascript
const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <button className="nav-button" onClick={() => openModal("login")}>
      RECIPE BOX
      <div className="plain-text">Log In</div>
    </button>
  );

  const personalGreeting = () => (
    <div className="greeting-loggedin">
      <Link to="/saved_recipes" id="saved-button">
        YOUR RECIPE BOX
      </Link>
      <div className="gear-dropdown-btn">
        <i className="fas fa-cog"></i>
        <div id="gear-dropdown" className="gear-dropdown">
          <div>
            <Link to="/">
              <button className="drop-button" onClick={logout}>
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};
```
 ### Search Bar

 ![searchbar](https://raw.githubusercontent.com/danjamesyee/DimCooking/master/app/assets/images/searchbar.gif)
 
   * Users search by recipe title
   * Search results link to recipe show
   * Can navigate results with arrow keys 
   * Enter key takes you to recipe show page
