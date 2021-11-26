import React, { useState } from 'react'
import { useProducts } from '../../context/providers/ProductsContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

import './ProductForm.css'

function ProductForm() {

    const history = useNavigate();

    const { addNewProduct, isLoading } = useProducts();

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: ''
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("image", selectedImage);

        await addNewProduct(formData);

        history("/menu");
        toast.success('🚀 Nuevo producto añadido!!', {
            position:'bottom-right'
        });
    }


    return (
        <div className="cardsOne">
            
            <form onSubmit={handleSubmit}>

                <div className="header">
                    <h1><span>Agre</span>gar un producto</h1>
                    <button className="btn" disabled={!product.name || isLoading}>
                        {isLoading ? 'Cargando...' : 'Guardar'}
                    </button>
                </div>

                <div className="card-wrappers">
                    <div className="form">
                        <input type="text" name="name" placeholder="Nombre del producto" autoComplete="off" autoFocus onChange={handleChange} />
                        <input type="text" autoComplete="off" name="price" placeholder="Precio del producto" onChange={handleChange} />
                        <textarea name="description" rows="2" placeholder="Descripción del producto" onChange={handleChange} ></textarea>
                        <input type="file" name="image" id="image" onChange={
                            (e) => {
                                setSelectedImage(e.target.files[0]);
                            }
                        } />
                    </div>
                    
                    <img src={
                        selectedImage ? URL.createObjectURL(selectedImage) : '/noImage.png'
                    } alt={product.name}  />
                </div>

            </form>
        </div>
    )
}

export default ProductForm