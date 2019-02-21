import React, { Component } from "react";
import { Link } from "@reach/router"
import { connect } from "react-redux";
import { fetchLocations } from "../actions/SearchAction";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      error: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const searchString = e.target.value;
    if (searchString.trim().length >= 3) {
      this.props.dispatch(fetchLocations(searchString));
    }
  }
  render() {
    if (Array.isArray(this.props.locations.locations)) {
      return (
        <div>
          <input
            onChange={this.handleChange}
            placeholder="Search Place..."
            className="search-control"
          />
          <div className="list">
            {this.props.locations.locations.map((locations, index) => {
              return (<div className="list-item" key={index}>
                <span><Link to={`/details/${locations.woeid}`}>{locations.title}</Link></span>
                <span>{` (${locations.location_type})`}</span>
                <span>{` ${locations.latt_long} (Lattitude,Longitude)`}</span>
              </div>);
            })}

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations,
    error: state.error
  };
};
export default connect(mapStateToProps)(Main);
