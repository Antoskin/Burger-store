import React, { Component } from 'react'
import {Navbar, Row, Col} from 'react-materialize'
import Menu from './Menu'

export default class Header extends Component {
    render() {
        return <Navbar className='header green darken-1' >
                    <Row>
                        <Col m={12}>
                           <Menu />
                        </Col>
                    </Row>
                </Navbar>
    }
}
