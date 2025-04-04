import React from 'react';
import './cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div className='watchs'>
            {
                cart.map(watch=> <div key={watch.id}>
                    <img src={watch.image} alt="" />
                    <button onClick={() => handleRemoveCart(watch.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;