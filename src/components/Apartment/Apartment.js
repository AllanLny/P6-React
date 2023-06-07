import React from 'react'
import "../Apartment/Apartment.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Caroussel from '../Caroussel/Caroussel'
import Dropdown from '../DropDown/DropDown'
import LogementJson from '../LogementJson/logement.json'
import { useParams } from 'react-router-dom'
import InfoLogement from '../InfoLogement/InfoLogement'
import Page404 from '../404/Page404'






export default function Apartment() {
    const { id } = useParams();
    const DataLogement = LogementJson.find((product) => product.id === id)
    if (!DataLogement) return <Page404 />

    return (
        <>
            <Header />
            <Caroussel pictures={DataLogement.pictures} />
            <InfoLogement />
            <article className='LogementDropDownContainer'>
                <Dropdown title={"Description"} description={DataLogement.description} />
                <Dropdown title={"Équipements"} description={
                    DataLogement.equipments &&
                    DataLogement.equipments.map((equipement, index) => {
                        return (
                            <ul className='equipements' key={equipement + index}>
                                <li>{equipement}</li>
                            </ul>
                        )
                    })
                } />
            </article>
            <Footer />
        </>
    )
}
