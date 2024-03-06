import React from 'react'
import '../Cards/Cards.scss'
import LogementJson from '../LogementJson/logement.json'
import { NavLink } from 'react-router-dom'

export default function Cards() {
    return (
        <article className="card-container">
            {LogementJson &&
                LogementJson.map((LogementJson, index) => (
                    <NavLink to={`logement/${LogementJson.id}`} key={LogementJson.id + index} >
                        <div className="card-item" key={index}>
                            <img className="card-item-image" src={LogementJson.cover} alt={'Photo' + LogementJson.title}>
                            </img>
                            <p className="card-item-text"> {LogementJson.title} </p>
                        </div>
                    </NavLink>
                ))
            }
        </article >
    )
}
