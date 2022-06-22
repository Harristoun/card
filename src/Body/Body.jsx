import React from "react";
import { useState } from "react";


const Body = () => {

const [noAdd, setNoAdd] = useState(false)


const handleShowDetails = () => {
    setNoAdd(true)
}
const hanldeCloseDetails = () => {
    setNoAdd(false)
}

    return (
        <div>
        <button className='detals'  onClick={handleShowDetails}>Details</button>
        {noAdd &&  <div className="add"> Спортивный и современный ботинок, прямиком из 2077 года. <button className="x" onClick={hanldeCloseDetails}>🇽</button> </div> }
        <div className='namePrice'>
            <h1>Bomj Sneaker</h1>
            <h1>120$</h1>
        </div>
        <hr />
        </div>
    );
};

export default Body;
