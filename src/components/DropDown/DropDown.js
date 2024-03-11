import "../DropDown/DropDown.scss"
import { useState } from 'react'
import VectorUp from '../../assets/VectorH.png'
import VectorDown from '../../assets/VectorB.png'

function Dropdown({ title, description }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

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
            <div className={`DropDownContainerTexte ${open ? 'visible' : ''}`}>
                {description}
            </div>
        </div>
    );
}
export default Dropdown