import React from 'react';
import { useState } from 'react';

const Footer = () => {
    const [addToBasket, setAddToBasket] = useState(true)


    const handleAdd = () => {
        setAddToBasket(!addToBasket)
    }
    const handleBlock = () => {
        setAddToBasket(false)
    }


    return (
        <div>
            <big>
Я блин в твоем познании настолько преисполнился.
            </big>
            <div className='delete'>
            <button className='create' onClick={handleAdd}>Добавить в корзину</button> {''}
            
            {addToBasket && <button onClick={handleBlock}>Удалить из корзины</button> } 
            {!addToBasket && 'Удалено'}
           
            </div>
            
        </div>
    );
};

export default Footer;
