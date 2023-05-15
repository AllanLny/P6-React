import React from 'react'
import Header from '../Header/Header'
import Banniere from '../Banniere/Banniere'
import Footer from '../Footer/Footer'
import Data from '../Cards/Cards'

export default function Home() {
    return (
        <div>
            <Header />
            <Banniere />
            <Data />
            <Footer />
        </div>
    )
}
