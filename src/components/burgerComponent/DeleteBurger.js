import React, {Component} from 'react'
import {Button} from 'react-materialize'
import { connect } from 'react-redux'
import {deleteBurg} from '../../action'


class DeleteGamburger extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <Button onClick={ () => this.props.deleteBurg(id) } 
                waves='light' 
                className='red btn-large' >REMOVE</Button>
            </div>
        )
    }
}


const mapDispatchToProps = ({
    deleteBurg
})


export default connect(null, mapDispatchToProps)(DeleteGamburger)