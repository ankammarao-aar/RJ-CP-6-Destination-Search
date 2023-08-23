// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="head-card">
          <h1 className="heading">Destination Search</h1>
          <div className="search-card">
            <input
              type="search"
              placeholder="Search"
              className="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon"
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationItem destination={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
