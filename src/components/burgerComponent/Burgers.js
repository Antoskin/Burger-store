import React, { Component } from 'react'
import {connect} from 'react-redux'
import Burger from './Burger'
import {Row} from 'react-materialize'


class Burgers extends Component {
    render() {
        const burgList = this.props.burgers.map( (infa, id) => {
            return <Burger 
                        id={id}
                        infa={infa}
                        key={id} />
        } )
        return (
            <Row>
               { burgList }
            </Row>
        )
    }
}

const mapStateToProps = ({burgers}) => ({burgers})

export default connect(mapStateToProps)(Burgers)