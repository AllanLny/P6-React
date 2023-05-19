import "../DropDown/DropDown.css"
import { useState } from 'react'
import VectorUp from '../../assets/VectorH.png'
import VectorDown from '../../assets/VectorB.png'

function Dropdown({ title, description }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="DropDownContainer">
            <button className="DropBtn" onClick={handleOpen}>
                <p className="DropBtnText">{title}</p>
                {open ? (
                    <img src={VectorUp} alt="vectorUp" />
                ) : (
                    <img src={VectorDown} alt="vectorDown" />
                )}
            </button>
            {open ? (
                <p className="DropDownContainerTexte"> {description}</p>
            ) : null
            }
        </div >
    )
}
export default Dropdown