// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext"

const Cart = () => {
    const {state: {cart}} = useCartContext();
    const [total, setTotal] = useState(0);

  
    useEffect(() => {
      setTotal(
        cart.reduce((acc,product) => acc + product.price, 0).toFixed(2)
      )
    }, [cart]);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Carrito</h1>
            <ul className="flex flex-col gap-2 text-black">
                {cart.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                )) }
            </ul>
            <span className="text-black"> Total de la compra: ${total}</span>
        </div>
    )
}

export default Cart;