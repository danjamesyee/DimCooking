import React from "react";
import ReactDOM from "react-dom";
import { fetchRecipes } from "../../actions/recipe_actions";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", results: [], typing: false, cursor: 0 };
    this.handleTyping = this.handleTyping.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.clear = this.clear.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleKeyDown(e) {
    const { cursor, results } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 1,
      }));
    } else if (event.keyCode === 13) {
      this.props.history.push(`/recipes/${results[cursor].id}`);
      this.clear();
    }
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.clear();
    }
  }

  handleTyping(e) {
    e.preventDefault();
    this.setState({ input: e.target.value, typing: true, cursor: 0 });
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
    const { cursor } = this.state;
    // debugger;
    if (this.props.recipes) {
      results = this.state.results.map((res, i) => {
        return (
          <div
            className="search-res"
            key={res.id}
            id={cursor === i ? "active" : null}
            // onKeyDown={this.handleKeyDown}
            // onKeyPress={() => this.handleEnter(res)}
          >
            <Link
              to={`/recipes/${res.id}`}
              onClick={() => this.clear()}
              id="search-flex"
            >
              <img id="search-img" src={res.photoUrl} />
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
            onKeyDown={this.handleKeyDown}
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
