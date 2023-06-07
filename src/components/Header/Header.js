import React from 'react'
import LOGO from "../../assets/.LOGO.png"
import "../Header/Header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className='NavBarContainer'>
            <img className='navLogo' src={LOGO} alt='LogoKasa' to="P6-React/" ></img>
            <nav className='NavBar'>
                <ul>
                    <li><NavLink className="Accueil" to="/" >Accueil</NavLink></li>
                    <li><NavLink className="A_Propos" to="/About" >A Propos</NavLink></li>
                </ul>
            </nav>
        </nav>
    )
}
