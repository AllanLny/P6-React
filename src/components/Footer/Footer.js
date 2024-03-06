import React from 'react'
import "../Footer/Footer.scss"
import LOGOFooter from "../../assets/.LOGOFooter.png"

export default function Footer() {
    return (
        <footer className='FooterContainer'>
            <img src={LOGOFooter} alt='LogoKasaFooter'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer >
    )
}
