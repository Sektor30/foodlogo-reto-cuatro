import { Link } from "react-router-dom";
import styled from "styled-components";

export const EventosContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--eventos-bg);
    padding: 3rem 10rem;
    margin-bottom: 100px;
    width: 100%;
    @media (max-width:991px) {
        margin-bottom: 70px;
    }
`;

export const EventosText = styled.div`
    text-align: left;
    flex: 1;
    @media (max-width:991px) {
        text-align: center;
    }
`;

export const EventosImg = styled.div`
    flex: 0.6;
    @media (max-width:991px) {
        display: none;
    }
`;

export const EventosH1 = styled.h1`
    text-align: left;
    width: 50%;
    font-size: 8rem;
    @media (max-width:991px) {
        text-align: center;
        width: 95%;
        margin: 0 auto;
        font-size: 60px;
    }
`;

export const EventosP = styled.p`
    text-align: left;
    width: 70%;
    font-size: 1.8rem;
    font-family: var(--font-txt);
    margin-bottom: 20px;
    @media (max-width:991px) {
        text-align: center;
        width: 80%;
        margin: 20px auto;
    }
`;

export const EventosA = styled(Link)`
    color: var(--negro);
    font-size: 1.8rem;
    font-weight: bold;
    &:hover {
        color: var(--rojo);
    }
`;

export const Img= styled.img`
    width: 45rem;
    height: 40rem;
`;