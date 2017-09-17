import React from 'react'
import {connect} from 'react-redux'

const Stops = ({stopNames}) => (
    <div className="main-panel">
        <h1>Stops</h1>
        <ul>
                {
                    stopNames.map(
                        stop => (
                            <li key={stop}>
                                {
                                    stop
                                }
                            </li>
                        )
                    )
                }
        </ul>
    </div>
);

export default connect(
    state => ({
        stopNames: state.stopNames
    })
)(Stops)