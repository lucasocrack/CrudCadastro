import './Logo.css'
import logo from '../../assets/img/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo(props) {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
        </aside>
    )
}

export default Logo