import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation } from "../actions/DetailAction";
import { Link } from "@reach/router"

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            error: {}
        };
        if (this.props.id)
            this.props.dispatch(fetchLocation(this.props.id));
    }

    render() {
        const { error, location } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (!location.location) {
            return <div>Loading...</div>;
        }

        if (location.location) {
            return (
                <div>
                    <div className="list_item">
                        <span>{location.location.title}</span>
                        <span>{` (${location.location.location_type})`}</span>
                    </div>
                    <div className="list_item">
                        {location.location.consolidated_weather.map((w, i) => {
                            return (<div className="list-item" key={i}>
                                <span>{` Date: ${w.applicable_date},`}</span>
                                <span>{` Weather Status: ${w.weather_state_name},`}</span>
                                <span>{` Min Tempratures: ${w.min_temp},`}</span>
                                <span>{` Max Tempratures: ${w.max_temp};`}</span>
                            </div>);
                        })}

                    </div>
                    <div className="back_button">
                        <span><Link to="/">Back to Search</Link></span>
                    </div>
                </div>);
        }
        return null;
    }
}

const mapStateToProps = state => {
    return {
        location: state.location,
        error: state.error
    };
};
export default connect(mapStateToProps)(Details);