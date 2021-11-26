import React from 'react';
import './styleSer.css';
import Sushi from '../../components/img/Sushi.png';


function Servicios(){
    return(
        <div className ="main-servicios">
             {/* Titulo */}
            <div class="servicios">
                <h1><span>Ser</span>vicios</h1>
            </div>
            <section class = "cardsp"> 
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Despedidas</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Fiestas</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Declaraciones</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
                </section >
                <section class ="cards2">
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="">Aniversarios</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Cena con amigos</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Sushi} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Cumpleaños</h5>
                        <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="botonm">
                            {/* Modal */}
                            <button  class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a> Más información</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}  
export default Servicios;