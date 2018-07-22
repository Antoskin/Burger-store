import React, {Component} from 'react'
import {Col, Card, CardTitle, Button, Collection, CollectionItem } from 'react-materialize'
import TotalPrice from '../TotalPrice'
import {Link} from 'react-router-dom'
import { getCard } from '../../action'
import { connect } from 'react-redux'

class Burger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    }

    render() {
        const { infa, id } = this.props
        const ingredientPreload = infa.ingredient.map( (i, id) => (
            <CollectionItem 
                href="#!" 
                key={id}> {i.item}
            </CollectionItem>
        ))
        return (
            <Col l={3} m={4} s={12}>
                <Card header={<CardTitle reveal image={infa.image} waves='light'/>}
                    title={infa.name} 
                    reveal={ <Collection>{ingredientPreload}</Collection> }> 
                    <TotalPrice 
                        price={infa.ingredient} 
                    /> 
                    <br/>
                    <Link className="btn" onClick={() => this.props.getCard(infa, id) }  
                        to={`/${infa.name}`} >MORE
                    </Link>
                </Card>
            </Col>
        )
    }
}

const mapStateToProps = ({ingredients}) => {
    return {
        ingredients
    }
}

const mapDispatchToProps = ({
    getCard
})

export default connect(mapStateToProps, mapDispatchToProps)(Burger)