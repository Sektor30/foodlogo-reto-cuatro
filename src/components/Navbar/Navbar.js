import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaShoppingCart, FaUserAlt, FaDatabase, FaSignOutAlt } from "react-icons/fa";
import { Hamb, Icons, IconsItem, Logo, LogoSpan, Nav, NavbarContainer, NavLink } from './Navbar.elements';
import { useAuth } from '../../context/providers/AuthContext'
import { useCart } from '../../context/providers/CartContext'

function Navbar() {

    const {isLoggedIn, logout, user} = useAuth();
    const { totalItems } = useCart();

    const [menu, setMenu] = useState(false);

    return (
        <NavbarContainer>

            <Link className="logo" to="/" style={Logo}><LogoSpan>FOOD</LogoSpan>LOGO</Link>

            <Nav menu = {menu}>
                <NavLink to="/nosotros">nosotros</NavLink>
                <NavLink to="/menu">menú</NavLink>
                <NavLink to="/servicios">servicios</NavLink>
                <NavLink to="/contactos">contáctanos</NavLink>
            </Nav>

            <Icons>

            {
                isLoggedIn ? (
                    <>

                        {
                            user.role ? (
                                <>
                                    <Link to="/products/new"><IconsItem><FaDatabase /></IconsItem></Link>
                                    <Link to="/" onClick={logout} ><IconsItem><FaSignOutAlt /></IconsItem></Link>
                                </>
                            ) : (
                                <>
                                <Link to="/cart"><IconsItem><FaShoppingCart /><span>{totalItems}</span></IconsItem></Link>
                                <Link to="/" onClick={logout} ><IconsItem><FaSignOutAlt /></IconsItem></Link>
                                </>
                            )
                        }

                    </>
                ) : (
                    <Link to="/auth/signup"><IconsItem><FaUserAlt /></IconsItem></Link>
                )
                }

                <Hamb onClick={() => {setMenu(!menu)}}><IconsItem><FaHamburger /></IconsItem></Hamb>

            </Icons>

        </NavbarContainer>
    )
}

export default Navbar