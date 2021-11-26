import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
    position: relative;
`;

export const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s eas all;
    z-index: 9;
    max-height: 700px;
    position: relative;
`;

export const TextoSlide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    font-size: 1.5rem;
    color: var(--blanco);
    background: rgba(0,0,0,0.5);
    @media (max-width:760px) {
        height: 90%;
    }
`;

export const SlidesText = styled.div`
    text-align: center;
`;

export const SlidesBtn = styled(Link)`
    margin-top: 1rem;
    display: inline-block;
    padding: .8rem 3rem;
    font-size: 1.7rem;
    border-radius: .5rem;
    border: 0.2rem solid var(--blanco);
    color: var(--blanco);
    font-weight: bold;
    cursor: pointer;
    background: none;
    text-align: center;
    margin: 10px auto 1px auto;
    transition: all .2s linear;
    &:hover {
        background: var(--rojo);
        padding: 1rem 3rem;
    }
    
    @media (max-width:760px) {
        margin-right: 2rem;
    }
`;

export const TextoSlideH1 = styled.h1`
    color: var(--blanco);
    font-size: 6rem;
`;

export const TextoSlideH5 = styled.h5`
    fon-size: 2rem;
    width: 70%;
    margin: 0 auto;
`;


export const SlideImg = styled.img`
    width: 100%;
    vertical-align: top;
    height: 650px;
    @media screen and (max-width: 700px) {
        height: 400px;
    }
`;

export const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

export const Boton = styled.button`
    pointer-events: all;
    cursor: pointer;
    font-size: 3.5rem;
    background: none;
    border: none;
    outline: none;
    color: var(--blanco);
    opacity: 0.5;
    width: 50px;
    height: 100%;
    text-align: center;
    transition: 0.3s eas all;
    position: absolute;
    ${props => props.derecho ? 'right' :  'left'}: 0;
    &:hover {
        opacity: 1;
    }
`;