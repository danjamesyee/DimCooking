import React from "react";
import ReactDOM from "react-dom";
import { fetchRecipes } from "../../actions/recipe_actions";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", results: [], typing: false };
    this.handleTyping = this.handleTyping.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.clear = this.clear.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.clear();
    }
  }

  handleTyping(e) {
    this.setState({ input: e.target.value, typing: true });
    this.filterResults();
  }

  filterResults() {
    this.setState({
      results: this.props.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(this.state.input.toLowerCase())
      ),
    });
  }

  clear() {
    this.setState({ input: "", results: [], typing: false });
  }

  render() {
    let results;
    // debugger;
    if (this.props.recipes) {
      results = this.state.results.map((res, i) => {
        return (
          <div id="search-res">
            <Link to={`/recipes/${res.id}`} onClick={() => this.clear()}>
              <div>{res.title}</div>
            </Link>
          </div>
        );
      });
    }
    return (
      <div className="search-cont">
        <form>
          <div id="search-icon">
            <img src="https://icon-library.com/images/icon-search/icon-search-8.jpg" />
          </div>
          <input
            className="search-bar"
            placeholder="What would you like to cook?"
            type="text"
            onChange={this.handleTyping}
            value={this.state.input}
          />
        </form>
        {this.state.typing && (
          <div id="clear-search" onClick={this.clear}>
            <div id="x">x</div>
          </div>
        )}
        <ul id="srcont">{results}</ul>
      </div>
    );
  }
}

export default Search;
