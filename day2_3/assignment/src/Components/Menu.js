
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {

    render() {

        return (
            <div>
                <label><NavLink to = "/">Home</NavLink></label>
                <label><NavLink to = "/add-book">Add Book</NavLink></label>

            </div>
        )
    }
}

export default Menu