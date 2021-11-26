import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterStyle = styled.div`
    background: var(--footer-bg);
    padding: 5rem 10rem;
    @media (max-width:768px) {
        text-align: center;
        padding: 2rem 2rem;
    }
`;

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
`;

export const FooterH1 = styled.h1`
    font-size: 2.5rem;
    padding: 1rem 0;
    color: var(--blanco);
`;

export const FooterIcon = styled.div`
    color: var(--rojo);
    padding-right: .5rem;
    transition: all .2s linear;
`;

export const FooterA = styled(Link)`
    margin-left: 15rem;
    display: flex;
    font-size: 1.5rem;
    color: var(--blanco);
    padding: 1rem 0;
    &:hover {
        ${FooterIcon} {
            padding-right: 2rem;
        }
    }
`;

export const FooterP = styled.p`
    line-height: 1.8;
    font-size: 1.5rem;
    color: var(--blanco);
    padding: 1rem 0;
    text-align: center;
`;

export const Share = styled.div`
    text-align: center;
`;

export const FooterShare = styled(Link)`
    font-size: 4rem;
    color: var(--blanco);
    margin-left: 3rem;
    text-align: center;
    transition: all .2s linear;
    &:hover {
        color: var(--rojo);
    }
`;