

const getCartFromLOcalStorage = ()=>{
    const storedCatString = localStorage.getItem('cart');
    if(storedCatString){
        const storedCart = JSON.parse(storedCatString);
        return storedCart;
    }
        return []
}

const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}


const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLOcalStorage();
    // cart.push(id)
    const newcart = [...cart, id]

    saveCartToLocalStorage(newcart);
}


const removeFromLocalStoraege = id =>{
    const storedCart = getCartFromLOcalStorage();
    const remainingcart = storedCart.filter(storedid => storedid !==id);
    saveCartToLocalStorage(remainingcart)
}

export {
    getCartFromLOcalStorage as getCartData,
    addItemToCartLocalStorage as addCartData,
    removeFromLocalStoraege

}