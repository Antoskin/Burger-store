import React, { Component } from 'react'
import { SideNav, SideNavItem, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return <SideNav
                    trigger={<a><i className="material-icons">menu</i></a>}
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem userView
                        user={{
                        name: 'Unit city',
                        email: 'unit@gmail.com'
                        }}
                    />
                    <Link to="/" >EXITING BURGERS </Link>
                    <Link to="/new">CREATE NEW ONE</Link>
                          
                </SideNav>
     
       
    }
}