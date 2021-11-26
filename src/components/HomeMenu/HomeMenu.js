import React from 'react'
import { useProducts } from '../../context/providers/ProductsContext'
import './HomeMenu.css'
import { Link } from 'react-router-dom';

function Homemenu() {

    const { products } = useProducts();

    const array = products.slice(0,3);

    return (
        <div className="menu">
            <h1><span>Me</span>nú</h1>
            <div className="menuItem-container">
                {array.map((product) => (
                    <div className="menuItem" key={product._id}>
                        <img src={product.image ? product.image.url : "/noImage.png" } alt="" />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
            <Link to="/menu" className="btn btnplus">Menú</Link>
        </div>
    )
}

export default Homemenu