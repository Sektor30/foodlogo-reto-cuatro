import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhone, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { BoxContainer, FooterIcon, FooterA, FooterH1, FooterStyle, FooterP, FooterShare, Share } from './Footer.elements'

function Footer() {
    return (
        <FooterStyle>
            <BoxContainer>

                <div>
                    <FooterH1><span>FOOD</span>LOGO</FooterH1>
                    <FooterP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sint.</FooterP>
                    <Share>
                        <FooterShare to="/"><FaFacebookSquare /></FooterShare>
                        <FooterShare to="/"><FaTwitterSquare /></FooterShare>
                        <FooterShare to="/"><FaInstagramSquare /></FooterShare>
                        <FooterShare to="/"><FaYoutubeSquare /></FooterShare>
                    </Share>
                </div>

                <div>
                    <FooterH1><span>CON</span>TACTO</FooterH1>
                    <FooterA to="/"><FooterIcon><FaPhone /></FooterIcon>+57 1112223333</FooterA>
                    <FooterA to="/"><FooterIcon><FaPhone /></FooterIcon>+57111-222-3333</FooterA>
                    <FooterA to="/"><FooterIcon><FaEnvelope /></FooterIcon>FOODLOGO@gmail.com</FooterA>
                    <FooterA to="/"><FooterIcon><FaMapMarkerAlt /></FooterIcon>Nowhere, Colombia</FooterA>
                </div>

                <div>
                    <FooterH1><span>INF</span>ORMACIÓN</FooterH1>
                    <FooterA to="/"><FooterIcon><FaArrowRight /></FooterIcon>Home</FooterA>
                    <FooterA to="/mapa"><FooterIcon><FaArrowRight /></FooterIcon>MAPA DEL SITIO</FooterA>
                    <FooterA to="/reserva"><FooterIcon><FaArrowRight /></FooterIcon>RESERVAS</FooterA>
                </div>
            </BoxContainer>
        </FooterStyle>
    )
}

export default Footer