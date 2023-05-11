import React from 'react'
import LOGO from "../../assets/.LOGO.png"

export default function Header() {
    return (
        <nav className='NavBarContainer'>
            <img className='navLogo' src={LOGO} alt='LogoKasa'></img>
            <nav className='NavBar'>
                <ul>
                    <li><a className="Accueil" >Accueil</a></li>
                    <li><a className="A_Propos" >A Propos</a></li>
                </ul>
            </nav>
        </nav>
    )
}
