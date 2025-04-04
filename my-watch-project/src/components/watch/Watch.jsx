import './Watch.css'

import React from 'react';

const Watch = ({watch,hadleAddToCart}) => {
    const {image,title,category,price}=watch;
    // console.log(watch);
    return (
        <div className='watch'>
            <img src={image} alt="" />
            <p>Product info : {title}</p>
            <h2>category : {category}</h2>
            <p>Stock : {watch.rating.count} </p>
            <h2>Pricte : ${price}</h2>


            <button onClick={()=>hadleAddToCart(watch)}>Add to cart</button>
        </div>
    );
};

export default Watch;