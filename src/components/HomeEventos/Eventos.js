import React from 'react'
import { EventosContainer, EventosH1, EventosImg, EventosP, EventosText, EventosA, Img } from './Eventos.elements';
import eventosImg from '../img/eventos.PNG'

function Eventos() {
    return (
        <EventosContainer>
            <EventosText>
                <EventosH1><span>ORG</span>ANIZAMOS TU EVENTO</EventosH1>
                <EventosP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga similique officia, voluptatem maiores quam esse ea impedit doloribus quis suscipit autem dignissimos perspiciatis accusantium rem hic molestias repellendus, neque fugit ullam quae sapiente! Nemo illo, dicta saepe animi asperiores earum!</EventosP>
                <EventosA to="/servicios">Más Información +</EventosA>
            </EventosText>
            <EventosImg>
                <Img src={eventosImg} alt="" />
            </EventosImg>
        </EventosContainer>
    )
}

export default Eventos