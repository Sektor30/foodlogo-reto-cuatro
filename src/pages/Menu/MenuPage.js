import React from 'react'
import './MenuPage.css'
import { useProducts } from '../../context/providers/ProductsContext'

//Components
import ProductCard from '../../components/Product/ProductCard'

function MenuPage() {

    const { isLoading,products } = useProducts();
    
    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="menu">
            <h1><span>Me</span>nú</h1>
            <div className="menuItem-container">
                {products.map((product) => (
                    <div key={product._id}>
                        <ProductCard product={product} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MenuPage
