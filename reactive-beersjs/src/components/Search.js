import React, {Component } from 'react'


class SearchBar extends Component {
    render() {
        return(
            <div className="searchbar">
                <h2>Search</h2>
                <input className="search" type="search" value={this.props.query} onChange={this.props.handleQuery}/>
               
              
            </div>
        )
    }
}

export default SearchBar