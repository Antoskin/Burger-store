import React, { Component } from 'react'
import { SideNav, SideNavItem, Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import img from './bur.jpg'

export default class Menu extends Component {
    render() {
        return <SideNav
                    trigger={<a><i className="material-icons">menu</i></a>}
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem userView
                        user={{
                        background: img,
                        name: 'Burger shop',
                        email: 'example@gmail.com'
                        }}
                    />
                    <Link to="/" >БУРГЕРЫ </Link>
                    <Link to="/new">СДЕЛАТЬ БУРГЕР</Link>
                          
                </SideNav>
     
       
    }
}