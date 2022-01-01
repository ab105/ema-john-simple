import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);//ai state a shob gulo product dekhabe
    const [cart, setCart] = useState([]);//ai state a je je product select korbo sheiguloke dekhabe
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product)=>{
        // console.log(product)
        //exixting cart er shob gulo element ke copy korte hobe
        const  newCart = [...cart,product];//spread operator or three dot diye cart er element guloke shobar age boshabo
        setCart(newCart);
        //save to local storage (for now)
        addToDb(product.key);


    }

    return (
        <div className = "shop-container">
            {/* <h2>this is shop</h2> */}
            <div className="product-container">
                {/* <h3>Products : {products.length} </h3> */}
                {
                    products.map(produc => <Product 
                        key={produc.key}
                        product={produc}
                        handleAddToCart = {handleAddToCart}
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* cart state ke aikane pataisi */}
            </div>
        </div>
    );
};

export default Shop;