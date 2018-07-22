import React, { Component } from 'react'

import {Row, Col, Collection, CollectionItem, Badge, Button, Input, Icon} from 'react-materialize'
import { connect } from 'react-redux'
import { addBurg , addIngredient, delIngredient } from '../../action'


class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '', 
                image: 'http://burgerclub.com.ua/wp-content/uploads/2014/10/%D1%80%D0%BE%D1%8F%D0%BB-%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%BA%D0%BB%D0%B0%D0%B11.png',
                item: '',
                price: '',
                ingredient: null
        }
    }

    ingredName = (e) => {
        this.setState({ name: e.target.value })
    }
    ingredientVal = (e) => {
        this.setState({ item: e.target.value})
    }
    priceVal = (e) => {
        let num = parseInt(e.target.value)
        this.setState({price: num})
    }
    


    addIngToState() {
        this.state.ingredient = this.props.ingredients
        this.setState({
            ingredient: this.state.ingredient,
        })
        
        this.props.addBurg(this.state)
    }

    render() {
        const ingredientList = this.props.ingredients.map( (i, ind) => {
            return <CollectionItem key={ind} href="#!">
                        {i.item}
                        <Badge>
                            <Button onClick={ () => this.props.delIngredient(ind) }>
                                del
                            </Button>
                        </Badge> 
                        <Badge>{i.price}</Badge> 
                    </CollectionItem>
        }  )
        return (
            <Row>
                <Col l={6} m={6}>
                    <img width="100%" src="https://m.mcdonalds.nl/sites/default/files/produits/110220_beef_800x596.png" />
                </Col>
                <Col l={6} m={6}>
                    <p>Название бургера:</p>
                    <Input s={12} 
                            label="Название" 
                            validate 
                            value={this.state.name}
                            onChange={ this.ingredName }/>
               
                    <p>Выберите ингридиент:</p>
                    <Collection>
                        {ingredientList}
                    </Collection>
                    <p>Добавить ингридиент:</p>
                    <Row className="new-ingr__wrap">
                        <Col s={4}>
                            <Input s={12} 
                                label="Новый ингридиент" 
                                validate 
                                value={this.state.item}
                                onChange={this.ingredientVal}
                                />
                        </Col>
                        <Col s={4}>
                            <Input s={12} 
                                    label="Цена" 
                                    validate 
                                    value={this.state.price}
                                    onChange={this.priceVal}/>
                        </Col>
                        <Col s={4}>
                            <Button 
                                className="btn btn-medium"
                                onClick={ () => this.props.addIngredient(this.state.item, this.state.price) }>Добавить
                            </Button>
                        </Col>
                    </Row>
                    <Button className='red' 
                            waves='light' 
                            onClick={ this.addIngToState.bind(this) } >Приготовить
                    </Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ingredients}) => {
    return { ingredients }
}

const mapDispatchToProps = {
    addBurg,
    addIngredient,
    delIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)
