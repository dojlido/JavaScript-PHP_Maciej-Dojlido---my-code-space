import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

class Results extends React.Component {

    state = {
        foundLines: [],
        departureStopIndex: [],
        arrivalStopIndex: [],
        timeToDepartureStop: [],
        timeToArrivalStop: [],
        timeAtDepartureStop: [],
        timeAtArrivalStop: [],
        matchedTime: []
    }

    findLine = () => {
        this.props.lines.map(
            line => line.stops.map(
                stop => stop.id === this.props.search.searchParams.departureStop[0].id ?
                    line.stops.map(
                        stop => stop.id === this.props.search.searchParams.arrivalStop[0].id ?
                            this.state.foundLines.push(line)
                            :
                            null
                    )
                    :
                    null
            )
        )
        console.log('FoundLines')
        console.log(this.state.foundLines)
    }

    matchTime = () => {
        this.getDepartureStopIndex()
        this.getTimeToDepartureStop()
        this.getTimeAtDepartureStop()
        this.getArrivalStopIndex()
        this.getTimeToArrivalStop()
        this.getTimeAtArrivalStop()
    }


    getDepartureStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.departureStop[0].id ?
                    this.state.departureStopIndex.push(index) : null
            )
        )
        console.log('DepartureStopIndex')
        console.log(this.state.departureStopIndex)
    }

    getArrivalStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.arrivalStop[0].id ?
                    this.state.arrivalStopIndex.push(index) : null
            )
        )
        console.log('ArrivalStopIndex')
        console.log(this.state.arrivalStopIndex)
    }

    getTimeToDepartureStop = () => {
        this.state.timeToDepartureStop.push(
            this.state.foundLines.map(
                foundLine => foundLine.dTimes.filter(
                    (dTime, index) => index <= this.state.departureStopIndex).reduce(
                    (sum, seconds) => sum + seconds
                )
            )
        )
        console.log('TimeToDepartureStop')
        console.log(this.state.timeToDepartureStop)
    }

    getTimeToArrivalStop = () => {
        this.state.timeToArrivalStop.push(
            this.state.foundLines.map(
                foundLine => foundLine.dTimes.filter(
                    (dTime, index) => index <= this.state.arrivalStopIndex).reduce(
                    (sum, seconds) => sum + seconds
                )
            )
        )
        console.log('TimeToArrivalStop')
        console.log(this.state.timeToArrivalStop)
    }

    getTimeAtDepartureStop = () => {
        this.state.foundLines.map(
            foundLine => foundLine.departures.map(
                departure => this.state.timeAtDepartureStop.push({
                        hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0],10))/3600),
                        minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0],10))%3600/60),
                        seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0],10))%60)
                    }
                )
            )
        )
        console.log('TimeAtDepartureStop')
        console.log(this.state.timeAtDepartureStop)
    }

    getTimeAtArrivalStop = () => {
        this.state.foundLines.map(
            foundLine => foundLine.departures.map(
                departure => this.state.timeAtArrivalStop.push({
                    hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                        parseInt(this.state.timeToArrivalStop[0],10))/3600),
                    minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                        parseInt(this.state.timeToArrivalStop[0],10))%3600/60),
                    seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                        parseInt(this.state.timeToArrivalStop[0],10))%60)
                    }
                )
            )
        )
        console.log('TimeAtArrivalStop')
        console.log(this.state.timeAtArrivalStop)
    }

    render() {
        return (
            this.props.search.searchParams ?
                (
                    this.findLine(), this.matchTime(),
                        <div className="main-panel">
                            <h1>Results</h1>
                            <ul>
                                {
                                    this.state.foundLines.map(
                                        (foundLine, index) =>
                                            <li key={index}>
                                                {
                                                    foundLine.name
                                                }
                                            </li>
                                    )
                                }
                            </ul>
                        </div>
                )
                : null
        )
    }

};


const mapStateToProps = state => ({
    stops: state.stops,
    lines: state.lines,
    search: state.search
});

export default connect(
    mapStateToProps
)(Results)