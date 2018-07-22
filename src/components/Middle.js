import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

import Burgers from './burgerComponent/Burgers'
import AddNew from './burgerComponent/AddBurger'
import BurgerCard from './burgerComponent/BurgerCard'

import '../App.css'


export default class Middle extends Component {
    render() {
        return <div className="main-content">
                <Switch>
                    <Route path="/new" component={AddNew} />
                    <Route path="/:id" component={BurgerCard} />
                    <Route path='/' exact component={Burgers} />
                </Switch>
        </div>
    }
}