import React from 'react'
import VectorG from '../../assets/VectorG.png'
import VectorD from '../../assets/VectorD.png'
import { useState } from 'react'
import "../Caroussel/Caroussel.css"

export default function Caroussel(pictures) {

    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const ImagePrecedente = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const ImageSuivante = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(pictures) || length <= 0) {
        return null
    }

    return (
        <div>
            <div className="Caroussel_Container">
                {pictures &&
                    pictures.map((picture, index) => {
                        return (
                            <div className={index === current ? 'picture active' : 'picture'} key={index}>
                                <img className="Caroussel_Image" key={index} src={picture} alt="Caroussel_Image" />
                                { }
                                <div className={index === current ? 'compteur' : 'compteur2'}>
                                    {current + 1}/{pictures.length}
                                </div>
                            </div>
                        )
                    })}
                <div className={pictures.length === 1 ? 'hide' : ''}>
                    <img className="VectorD" src={VectorD} alt="Vector_Droite" onClick={ImageSuivante} />
                    <img className="VectorG" src={VectorG} alt="Vector_Gauche" onClick={ImagePrecedente} />
                </div>
            </div>
        </div>
    )
}

