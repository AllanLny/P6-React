import React from 'react'
import Header from '../Header/Header'
import '../404/Page404.scss'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <>
            <Header />
            <div className='P404'>404</div>
            <div className='Texte404'>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="" className='Link404'>Retourner sur la page d'accueil</Link>
        </>
    )
}
