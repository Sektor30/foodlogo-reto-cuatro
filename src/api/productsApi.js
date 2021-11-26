import axios from 'axios'

const API = process.env.REACT_APP_API || "";

export const getProducts = async () => {
    return await axios.get(`${API}/products`);
};

export const saveProduct = async (newProduct) => {
    return await axios.post(`${API}/products`, newProduct);
}

export const removeProduct = async (id) => {
    return await axios.delete(`${API}/products/${id}`);
};