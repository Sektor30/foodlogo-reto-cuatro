import React  from 'react';
import './StyleNos.css'
import img1 from '../../components/img/img1.jpg';
import E1 from '../../components/img/Ellipse1.png';
import E2 from '../../components/img/Ellipse2.png';
import E3 from '../../components/img/Ellipse3.png';
import E4 from '../../components/img/Ellipse4.png';
import E5 from '../../components/img/Ellipse5.png';
import E6 from '../../components/img/Ellipse6.png';

function Nosotros(){
    return(
        <div className="main-nosotros">
            <div class="nosotros">
                <h1><span>Nos</span>otros</h1>
            </div>
                <div class="main-historia">
                    <div class="imagen">
                        <img src={img1}/>
                    </div>
                    <div class="texto">
                    <div id="historia" class="titulo">
                        <h1>Reseña histórica</h1>
                    </div>
                    <div class="textoP">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ante, varius montes eget velit mattis hendrerit ac tortor quis nostra, elementum phasellus himenaeos massa nulla uismod quisque suscipit. At tortor ultrices rutrum mattis praesent hendrerit ante sociosqu viverra proin, pulvinar elementum nec nascetur nisi in aenean taciti convallis facilisi, platea laoreet metus iaculis sociis penatibus ullamcorper scelerisque eros. Aenean mollis felis ac nec hac tincidunt purus vivamus.
                        </p>
                    </div>
                </div>
            </div>
            <div class="main-equipo">
                <div id="equipo" class="titulo-equipo">
                    <h1><span>Equi</span>po de trabajo</h1>
                </div>
                <div class="integrantes">
                    <ul>
                        <li class="lista">
                            <div class="integrante">
                                <img src={E1}/>
                                <h2>Nombre</h2>
                                <p>Chef</p>
                            </div>
                            <div class="integrante">
                                <img src={E3}/>
                                <h2>Nombre</h2>
                                <p>Chef</p>
                            </div>
                            <div class="integrante">
                                <img src={E4}/>
                                <h2>Nombre</h2>
                                <p>Chef</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="main-directivo">
                    <div class="directivo">
                        <img src={E2}/>
                        <h2>Nombre</h2>
                        <p>Directivo</p>
                    </div>
                </div>
            </div>
        
            <div class="main-comentarios">  
                <div class="barra"></div>
                <div class="bloques">
                    <div class="com1">
                        <img src={E5}/>
                        <div class="text">
                            <h4>Nombre</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sapiente repellat, illo quo doloribus quidem accusantium. Ullam rem, voluptatibus.</p>
                        </div>
                    </div>
                    <div class="com">
                        <img src={E6}/>
                        <div class="text">
                            <h4>Nombre</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sapiente repellat, illo quo doloribus quidem accusantium. Ullam rem, voluptatibus.</p>
                        </div>
                    </div>
                </div>  
            </div>

        </div>
    );
}
export default Nosotros;