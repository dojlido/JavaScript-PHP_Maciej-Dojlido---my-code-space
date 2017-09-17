import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import Favs from './menu-items/Favs'
import Lines from './menu-items/Lines'
import Schedules from './menu-items/Schedules'
import Stops from './menu-items/Stops'
import Log from './menu-items/Log'

const Content = () => (
    <Grid fluid>
        <Switch>
            <Route exact path="/"/>
            <Route path="/favs" component={Favs}/>
            <Route path="/lines" component={Lines}/>
            <Route path="/schedules" component={Schedules}/>
            <Route path="/stops" component={Stops}/>
            <Route path="/log" component={Log}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </Grid>
)

export default Content
