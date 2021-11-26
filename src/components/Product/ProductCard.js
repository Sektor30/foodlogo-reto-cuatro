import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaTimes } from "react-icons/fa";
import './Modal.css'
import { useAuth } from '../../context/providers/AuthContext'
import { useProducts } from '../../context/providers/ProductsContext'
import {useNavigate} from 'react-router-dom'
import { useCart } from '../../context/providers/CartContext'
import { toast } from 'react-hot-toast'

function ProductCard({product}) {

    const { deleteProduct } = useProducts();
    const {user, isLoggedIn} = useAuth();
    const { appendItemToCart } = useCart();
    const history = useNavigate();

    const [open, setOpen] = useState(false);

    const handleCart = (product) => {
        appendItemToCart(product);
        toast.success('Producto añadido al carrito', {
            position: "bottom-right"
        });
    }

    const handleDelete = async (id) => {
        const deletedProduct = await deleteProduct(id);
        if(deletedProduct){
            toast.success('Producto eliminado', {
                position: "bottom-right"
            });
        }
    }

    return (
        <>
            <div className="menuItem">
                <img src={product.image && product.image.url ? product.image.url : "/noImage.png" } alt="" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>

                {
                    isLoggedIn ? (
                        user.role === "admin" ? (
                            <>
                                <button className="btn" onClick={() => handleDelete(product._id)} >
                                    Eliminar
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn" onClick={() => setOpen(true)} >Mas Información</button>
                                <button className="btn" onClick={() => handleCart(product)}>Ordenar</button>
                            </>
                        )
                    ) : (
                        <>
                            <button className="btn" onClick={() => setOpen(true)} >Mas Información</button>
                            <button className="btn" onClick={() => history("/auth/signin")} >Ordenar</button>
                        </>
                    )
                }

            </div>
            <Modal isOpen={open} className="meal-details" onRequestClose={() => setOpen(false)}>
                <button className="close" onClick={() => setOpen(false)} ><FaTimes /></button>
                <div className="meal-content">
                    <h2 className="recipe-title">
                        {product.name}
                    </h2>
                    <div className="recipe-instructions">
                        <h3 className="recipe-ingredient">Ingredientes: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet repellendus fuga vitae. In, labore vel natus neque quibusdam consequuntur maiores nulla officia inventore quidem id modi maxime voluptates obcaecati excepturi nam voluptatem nostrum velit error voluptas earum quia laborum eius? Voluptatem nemo repellat consequuntur? Ducimus cum suscipit repellendus sequi.</p>
                    </div>
                    <div className="recipe-img">
                        <img src={product.image ? product.image.url : "/noImage.png" } alt="" />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProductCard