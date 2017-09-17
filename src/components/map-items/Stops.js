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

const initialStops = {
    departureStop: null,
    arrivalStop: null,
    departureChecked: false,
    arrivalChecked: true,
    time: moment(),
    typeOfTime: 'arrival',
    stops: null
}


class Stops extends React.Component {

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

    handleArrivalCheckboxClick = () => this.setState({
        arrivalChecked: true,
        departureChecked: false,
        typeOfTime: 'arrival'
    });

    handleDepartureCheckboxClick = () => this.setState({
        arrivalChecked: false,
        departureChecked: true,
        typeOfTime: 'departure'

    });

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
                    <div className="search-box_icon">
                        <i className="fa fa-map-marker"/>
                    </div>
                    <Select
                        name="departureStop"
                        value={this.state.departureStop}
                        options={this.options}
                        onChange={this.handleDepartureChange}
                        placeholder="Start point..."
                        className="search-input"
                    />
                </div>
                <div className="search-box">
                    <div className="search-box_icon">
                        <i className="fa fa-flag"/>
                    </div>

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
                        <Checkbox
                            checked={this.state.arrivalChecked}
                            onChange={this.handleArrivalCheckboxClick}
                        >
                            Arrival
                        </Checkbox>
                        <Checkbox
                            checked={this.state.departureChecked}
                            onChange={this.handleDepartureCheckboxClick}
                        >
                            Departure
                        </Checkbox>
                    </div>
                    <TimePicker
                        name="time"
                        showSecond={false}
                        value={this.state.time}
                        onChange={this.handleTimeChange}
                        format={'HH:mm'}
                        className="search-time-input"
                    />
                    <Button
                        bsStyle="primary"
                        className="search-button"
                        type="submit"
                    >
                        <i className="fa fa-search"/>Search</Button>
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
)(Search)