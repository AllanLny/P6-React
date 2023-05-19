import React from 'react'
import '../Cards/Cards.css'
import Data from '../Data/data.json'

export default function Cards() {
    return (
        <article className="card-container">
            {Data &&
                Data.map((Data, index) => (
                    <div className="card-item" key={index}>
                        <img className="card-item-image" src={Data.cover} alt={'Photo' + Data.title}>
                        </img>
                        <p className="card-item-text"> {Data.title} </p>
                    </div>
                ))
            }
        </article>
    )
}
