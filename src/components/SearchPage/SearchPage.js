import React from "react";

import "./SearchPage.css";

class SearchPage extends React.Component {
  render() {
    const search = this.props.location.search.split("=")[1];
    return (
      <div className="search-container container">
        <h4>
          Search Result for "<span className="search-string">{search}</span>" :
        </h4>
      </div>
    );
  }
}

export default SearchPage;
