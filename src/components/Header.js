
import React, { Component } from 'react'
import '../css/Header.css'

class Header extends Component {

    render () {
        return (
            <div id='header'>
               <h1>HighOnCoding</h1>
               <b><a href='#'>Home</a></b>
               <a href='#' id='categories'>Categories</a> 
            </div>
        )
    }
}

export default Header