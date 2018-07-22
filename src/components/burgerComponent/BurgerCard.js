import React, {Component} from 'react'
import {Row, Col, Collection, CollectionItem, Badge, Icon, Toast } from 'react-materialize'
import TotalPrice from '../TotalPrice'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Delete from './DeleteBurger'





class BurgerCard extends Component {

    render() {
        const {burCard} = this.props;
            const ingredientsL = burCard[0].ingredient.map( (i, idi) => (
                <CollectionItem key={idi} href="#!">
                            {i.item} <Badge>{i.price} <Icon small>attach_money</Icon></Badge>
                </CollectionItem>
            ) )
        return (
            <Row> 
                <Col l={6} m={6} s={12}>
                    <img src={burCard[0].image} />
                </Col> 
                <Col l={6} m={6} s={12}>
                    <h2>{burCard[0].name} </h2>
                    <Collection>
                       {ingredientsL}
                    </Collection>
                    <h5>Total price: <TotalPrice price={burCard[0].ingredient} /></h5>
                    <Row>
                        <Col l={6} m={6}>
                            <Toast toast="Bon Appetit !!">
                                BUY
                            </Toast>
                        </Col>
                        <Col l={6} m={6}>
                            <Delete id={burCard[1]} />
                        </Col>
                    </Row>
                </Col>
                <Col l={12} m={12} s={12}>
                    <Link to='/'><Icon small>keyboard_backspace</Icon></Link>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({burCard}) => {
    return { 
        burCard
    }
}


export default connect(mapStateToProps)(BurgerCard)