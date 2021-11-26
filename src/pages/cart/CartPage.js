import React, {useState} from 'react'
import { FaTrash } from "react-icons/fa";
import { useCart } from '../../context/providers/CartContext'
import { useForm, ValidationError } from '@formspree/react';

import './CartPage.css'

function CartPage() {

    const [form, handleSubmit] = useForm("moqyggdn");

    const { items, removeItem, totalPrice, clearCart, appendItemToCart, decrementItem } = useCart();


    const [quantity, setQuantity] = useState(0);

    if(items.length === 0) {
        return (
            <h1 className="empty">Carrito vacío</h1>
        )
    }

    const send = () => {
        if(form.succeeded) {
            clearCart()
        }
    }

    return (
        <div className="shoopingCart">
            <div className="header">
                <div>
                    <h1><span>Carr</span>ito de compras</h1>
                    <button className="btn" onClick={() => clearCart()}>Limpiar carrito</button>
                </div>
            </div>
            <div className="container">
                <div className="items">
                    <form onSubmit={handleSubmit}>
                        {
                            items.map(product => (

                                <>
                                
                                    <div className="shoopingBox" key={product._id}>
                                        <img src={product.image ? product.image.url : '/noImage.png'} alt="" />
                                        <div>
                                            <div className="boxInfo">
                                                <div className="title">
                                                    <h3>{product.name}</h3>
                                                    <FaTrash className="icon" onClick={() => removeItem(product)} />
                                                </div>
                                                <h2>Precio: {product.price}</h2>
                                                <h2>Cantidad: {product.quantity}</h2>
                                                <h2>Total: ${product.price * product.quantity}</h2>
                                            </div>
                                            <div className="boxValue">
                                                <button className="btn" onClick={() => decrementItem(product, quantity)} >-</button>
                                                <input type="number" value={quantity ? quantity : 0} 
                                                onChange={e => setQuantity(e.target.value)}
                                                />
                                                <button className="btn" onClick={() => appendItemToCart(product, quantity)}>+</button>
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{display: 'none'}}>

                                        <label htmlFor="producto">
                                            Productos
                                        </label>
                                        <input
                                            id="producto"
                                            type="text" 
                                            name="producto"
                                            value={product.name}
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={form.errors}
                                        />

                                        <label htmlFor="precio">
                                            Precios
                                        </label>
                                        <input
                                            id="precio"
                                            type="text" 
                                            name="precio"
                                            value={product.price}
                                        />
                                        <ValidationError 
                                            prefix="precio" 
                                            field="precio"
                                            errors={form.errors}
                                        />

                                    </div>
                                
                                </>

                            ))

                        }

                        <div className="pagar">
                            <h3>Total: {totalPrice}</h3>
                            <button className="btn" type="submit" disabled={form.submitting} onClick={() => form.succeeded === true, send()} >
                                Pagar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CartPage