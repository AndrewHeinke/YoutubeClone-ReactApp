import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:  '' };
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="search-bar">
          <FontAwesome
          className='search-icon'
          name='search'
          />
          <input placeholder="Search..."
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
