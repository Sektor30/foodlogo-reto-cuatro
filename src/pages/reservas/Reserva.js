import React from 'react'
import './Reserva.css'
import { useForm, ValidationError } from '@formspree/react';

function Reserva() {

    const [state, handleSubmit] = useForm("xdoyqqlo");

    const send = () => {
        if(state.succeeded) {
          window.location.reload(false);
        }
    }

    return (
        <div className="reservacion-banner">
            <h1><span>RES</span>ERVA</h1>

            <div className="card-wrapper">
                <div class="card-img"></div>

                <div class="card-text">
                    <h3>Reservación</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-row">
                            <select name="dias" required>
                                <option value="dia">Seleccione el día</option>
                                <option value="domingo">Domingo</option>
                                <option value="lunes">Lunes</option>
                                <option value="martes">Martes</option>
                                <option value="miercoles">Miercoles</option>
                                <option value="jueves">Jueves</option>
                                <option value="viernes">Viernes</option>
                                <option value="sabado">Sábado</option>
                            </select>
                            <select name="horas" required>
                                <option value="hora">Seleccione la hora</option>
                                <option value="10">10:00</option>
                                <option value="12">12:00</option>
                                <option value="14">14:00</option>
                                <option value="16">16:00</option>
                                <option value="18">18:00</option>
                                <option value="20">20:00</option>
                                <option value="22">22:00</option>
                            </select>
                        </div>

                        <div class="form-row">
                            <input type="text" placeholder="Nombre completo" name="name" required/>
                            <input type="text" placeholder="Número de teléfono" name="phone" required/>
                        </div>

                        <div class="form-row">
                            <input type="number" name="cantidad" placeholder="Cantidad de personas" min="1"/>
                            <input class="btn" type="submit" value="RESERVAR" disabled={state.submitting} onClick={() => state.succeeded ==true, send()} />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Reserva