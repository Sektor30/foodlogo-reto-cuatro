import React from 'react'
import { Link } from 'react-router-dom'
import './Mapa.css'

function Mapa() {
    return (
        <div>
            <h1><span>MAPA</span> DEL SITIO</h1>
            <div className="containeMap">
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/menu">Menú</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/contactos">Contáctanos</Link>
                <Link to="/reserva">Reservaciones</Link>
            </div>
        </div>
    )
}

export default Mapa
