import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results/Results'
import Map from './map-items/Map'

import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

const App = () => (

    <Grid>
        <Row>
            <Col md={4}>
                <Search />
            </Col>
            <Col mdOffset={2} md={6}>
                <Menu />
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Results />
            </Col>
            <Col md={6}>
                <Content />
            </Col>
        </Row>
                <Row>
                    <Col md={6}>
         <button id="buttonTest">ButtonTest</button>
                <div id="divTest">1</div>
                            </Col>
        </Row>

        <Map/>
    </Grid>

);

export default App





