import React, { useState } from 'react'
import { useAuth } from '../../context/providers/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signin() {

    const history = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const {signin, isLoading, errorMessage} = useAuth();

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userResponse = await signin(user);
            if(userResponse) {
                history('/');
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (

        <div className="container">
            {
                errorMessage && (
                    <div className="alert">
                        <h2>{errorMessage}</h2>
                    </div>
                )
            }

            <div className="cards">
                
                <form onSubmit={handleSubmit}>

                    <h1><span>Lo</span>gin</h1>

                    <div className="card-wrapper">
                        <div className="form">
                            <input type="text" name="email" placeholder="Correo" autoComplete="off" autoFocus onChange={handleChange} />
                            <input type="password" autoComplete="off" name="password" placeholder="Contraseña" onChange={handleChange} />
                        </div>
                    </div>
                    <button className="btn"
                    disabled={!user.email || !user.password || isLoading}
                    >
                        {
                            isLoading ? 'Loading...' : 'Ingresar'
                        }
                    </button>

                    <p>No tienes una cuenta? <Link to="/auth/signup">Crea una cuenta</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Signin