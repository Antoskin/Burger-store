import React, { Component } from 'react'
import {Footer} from 'react-materialize';

import {Link} from 'react-router-dom'


export default class Futer extends Component {
    render() {
        return (
                <Footer copyrights="2018"
                    links={
                        <ul>
                            <li> <Link to="/">БУРГЕРЫ</Link></li>
                            <li> <Link to="/new">СДЕЛАТЬ БУРГЕР</Link></li>
                        </ul>
                    }
                    className='green darken-3'
                    >
                        <h5 className="white-text">Get it now!!!</h5>
                        {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                </Footer>
           
        )
    }
}