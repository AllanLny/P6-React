import React from 'react'
import "../Apartment/Apartment.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Caroussel from '../Caroussel/Caroussel'
import Dropdown from '../DropDown/DropDown'
import LogementJson from '../LogementJson/logement.json'
import { useParams } from 'react-router-dom'



export default function Apartment() {
    const { id } = useParams();
    const DataLogement = LogementJson.find((product) => product.id === id)

    return (
        <>
            <Header />

            <article className='LogementDropDownContainer'>
                <Dropdown title={"Description"} description={DataLogement.description} />
                <Dropdown title={"Équipements"} description={DataLogement.equipments} />
            </article>

            <Footer />
        </>
    )
}
