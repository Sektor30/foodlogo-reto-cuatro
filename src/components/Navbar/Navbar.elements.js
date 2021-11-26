import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    background: var(--blanco);
    box-shadow: var(--box-shadow);
    text-transform: uppercase;
    @media (max-width:991px) {
        padding: 2rem;
    }
`;

export const Nav = styled.div`
    @media (max-width:768px) {
        position: absolute;
        top: 110%;
        right: ${({menu}) => menu ? '2rem' : '-110%'};
        width: 30rem;
        box-shadow: var(--box-shadow);
        border-radius: .5rem;
        background: var(--blanco);     
    }
`;

export const Logo = {
    fontFamily: 'var(--font-title)',
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    color: 'var(--negro)',
}

export const LogoSpan = styled.span`
    color: var(--rojo);
    font-family: var(--font-title);
`;

export const NavLink = styled(Link)`
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--negro); 
    margin: 0 1rem;
    transition: all .2s linear;
    &:hover {
        color: var(--rojo);
    }
    @media (max-width:768px) {
        font-size: 2rem;
        margin: 2rem 2.5rem;
        display: block;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconsItem = styled.div`
    height: 4rem;
    width: 6rem;
    line-height: 4.5rem;
    border-radius: 0.5rem;
    background: var(--dark-blanco);
    color: var(--negro);
    font-size: 2rem;
    margin-right: 0.3rem;
    text-align: center;
    cursor: pointer;
    transition: all .3s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
        color: var(--blanco);
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkgray;
        font-size: 1.3rem;
    }
    &:hover {
        background: var(--rojo);
        color: var(--blanco);
    }
`;

export const Hamb = styled.div`
    display: none;
    @media (max-width:768px) {
        display: inline-block;
    }
`;

export const Search = styled.div`
    position: absolute;
    top: 110%;
    right: ${({search}) => search ? '2rem' : '-110%'};
    width: 50rem;
    height: 5rem;
    background: var(--blanco);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
`;

export const StyleForm = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem auto',
}

export const Input = styled.input`
    height: 100%;
    width: 100%;
    background: none;
    text-transform: none;
    color: var(--negro);
    font-size: 1.6rem;
    padding: 0 1.5rem;
`;

export const Label = styled.label`
    font-size: 2.2rem;
    padding-right: 1.5rem;
    color: var(--negro);
    cursor: pointer;
    &:hover {
        color: var(--rojo);
    }
`;

export const BoxSearch = styled.ul`
    width: 100%;
    background: var(--blanco);
    border-radius: 0 0 .5rem .5rem;
    box-shadow: var(--box-shadow);
    text-transform: capitalize;
    overflow: hidden;
    display: none;
    margin-top: 1rem;
`;

export const BoxSearchItem = styled(Link)`
    color: var(--negro);
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 1rem 0 1rem 5rem;
    &:hover {
        background: #f3f3f3;
    }
`;

export const BoxSearchIcon = styled.div`
    margin-right: 1.5rem;
    font-size: 1.2rem;
`;

export const Login = styled.form`
    position: absolute;
    top: 110%;
    right: ${({login}) => login ? '2rem' : '-110%'};
    width: 30rem;
    box-shadow: var(--box-shadow);
    padding: 2rem;
    border-radius: .5rem;
    background: var(--blanco);
    text-align: center;
`;

export const LoginH3 = styled.h3`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: var(--negro);
`;

export const LonginInput = styled.input`
    margin: .7rem 0;
    background: var(--light-color-2);
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.6rem;
    color: var(--negro);
    text-transform: none;
    width: 100%;
`;

export const LoginP = styled.p`
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
    text-transform: none;
`;

export const LoginLink = styled(Link)`
    color: var(--rojo);
    text-decoration: underline;
`;