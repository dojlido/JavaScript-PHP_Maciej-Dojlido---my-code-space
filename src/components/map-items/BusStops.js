import React from 'react';
import './Search.css';
import {Button, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

import {
    search
} from '../../state/search'


class Favorites extends React.Component {

    state = initialStops;

    options = [];

    handleDepartureChange = value => this.setState({
        departureStop: value
    });

    handleArrivalChange = value => this.setState({
        arrivalStop: value
    });

    handleTimeChange = value => {
        this.setState ({
            time: value
        })
    }

   
    handleSubmitClick = event => {
        event.preventDefault();

        const departureStop = this.state.departureStop;
        const arrivalStop = this.state.arrivalStop;
        const time = this.state.time;
        const typeOfTime = this.state.typeOfTime;

        if (departureStop && arrivalStop ) {

            this.props.handleSubmitClick(
                departureStop.value,
                arrivalStop.value,
                time,
                typeOfTime
            )

            this.setState(initialStops);
        }
    }

    render() {
        this.options = this.props.stops ? this.props.stops.map(
            stop => ({
                value: stop.name,
                label: stop.name
            })
        ) : null;

        return (
            <form className="search-container" onSubmit={this.handleSubmitClick}>
                <div className="search-box">
                  
                </div>
                <div className="search-box">
                   
                    <Select
                        name="arrivalStop"
                        value={this.state.arrivalStop}
                        options={this.options}
                        onChange={this.handleArrivalChange}
                        placeholder="Destination..."
                        className="search-input"
                    />
                </div>
                <div className="search-box">
                    <div className="search-box_check">
                      
                    </div>
                </div>
            </form>
        )
    }

}

const mapStateToProps = state => ({
    stops: state.stops
});

const mapDispatchToProps = dispatch => ({
    handleSubmitClick: (departureStop,arrivalStop, time, typeOfTime) => dispatch(
        search(
            departureStop,
            arrivalStop,
            time,
            typeOfTime
        )
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusStops)


////


export const fetchStops = () => dispatch => {
    fetch(
        'https://frozen-garden-78232.herokuapp.com/transport/stops.json'
    ).then(
        response => response.json()
    ).then(
        stops => dispatch(setStops(stops))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_STOPS:
            return action.stops;
        default:
            return state
    }
}