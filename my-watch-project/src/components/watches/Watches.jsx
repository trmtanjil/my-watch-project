import './Watches.css'

import React, { use, useEffect, useState } from 'react';
import Watch from '../watch/watch';
import { addCartData, getCartData, removeFromLocalStoraege } from '../../utilities/localstorage';
import Cart from '../cart/Cart';

const Watches = ({watchPromise}) => {
    const watchs = use(watchPromise)

    useEffect(()=>{
        const storedCartids = getCartData()
        console.log(storedCartids,watchs);

        const storedCart =[];
        for(const id of storedCartids){
            const cartwatch = watchs.find(bottle =>bottle.id ===id);
            if(cartwatch){
                storedCart.push(cartwatch)
            }
        }

        setcart(storedCart)

    },[watchs])
 



    const [cart, setcart]= useState([])


    const hadleAddToCart = (watch)=>{
         
        const newCart = [...cart, watch]
        setcart(newCart)

        addCartData(watch.id);
    }

    const handleRemoveCart = id =>{
        console.log('remve itme ',id);

        const remianingCart = cart.filter(watch => watch.id !==id);
        setcart(remianingCart)

        removeFromLocalStoraege(id)
    }


    // console.log(watchs);
    return (
        <div>
            <h2>watchs lecgth : {watchs.length}</h2>
            <h3>added to cart : {cart.length}</h3>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
          <div  className='wachesContainer'>
          {
            watchs.map(watch =><Watch
                key={watch.id} 
                 watch={watch}
                  hadleAddToCart={hadleAddToCart}
                  ></Watch>)
            }
          </div>
        </div>
    );
};

export default Watches;