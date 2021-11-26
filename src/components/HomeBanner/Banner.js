import React, { useEffect, useRef } from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Boton, ContenedorPrincipal, ContenedorSlideShow, Controles, Slide, SlideImg, SlidesBtn, SlidesText, TextoSlide, TextoSlideH1, TextoSlideH5 } from './Banner.elements'

function Banner() {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = () => {
        if (slideshow.current && slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `600ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);
        }
    }

    const anterior = () => {
        if(slideshow.current && slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const ultimoElemeto = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemeto, slideshow.current.firstChild);

            slideshow.current.style.transition = `none`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `600ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(()=> {
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 5000)

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, 5000)
        });

        return () => clearInterval(slideshow.current);
    }, []);

    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow ref={slideshow}>
                <Slide>
                    <a href="/">
                        <SlideImg src="https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <TextoSlide>
                        <SlidesText>
                            <p>Lorem ipsum dolor sit amet</p>
                            <TextoSlideH1><span>BIG</span>HAMB</TextoSlideH1>
                            <TextoSlideH5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, similique?</TextoSlideH5>
                        </SlidesText>
                        <div>
                            <SlidesBtn to="/menu">Ordenar Ahora</SlidesBtn>
                        </div>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="/">
                        <SlideImg src="https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <TextoSlide>
                        <SlidesText>
                            <p>Lorem ipsum dolor sit amet</p>
                            <TextoSlideH1><span>PIZZA</span>HUNTER</TextoSlideH1>
                            <TextoSlideH5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, similique?</TextoSlideH5>
                        </SlidesText>
                        <div>
                            <SlidesBtn to="/menu">Ordenar Ahora</SlidesBtn>
                        </div>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="/">
                        <SlideImg src="https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <TextoSlide>
                        <SlidesText>
                            <p>Lorem ipsum dolor sit amet</p>
                            <TextoSlideH1><span>MEX</span>TACOS</TextoSlideH1>
                            <TextoSlideH5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, similique?</TextoSlideH5>
                        </SlidesText>
                        <div>
                            <SlidesBtn to="/menu">Ordenar Ahora</SlidesBtn>
                        </div>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="/">
                        <SlideImg src="https://images.pexels.com/photos/6144972/pexels-photo-6144972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <TextoSlide>
                        <SlidesText>
                            <p>Lorem ipsum dolor sit amet</p>
                            <TextoSlideH1><span>SUSHI</span>BAR</TextoSlideH1>
                            <TextoSlideH5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, similique?</TextoSlideH5>
                        </SlidesText>
                        <div>
                            <SlidesBtn to="/menu">Ordenar Ahora</SlidesBtn>
                        </div>
                    </TextoSlide>
                </Slide>
            </ContenedorSlideShow>
            <Controles>
                <Boton onClick={anterior}><FaRegArrowAltCircleLeft /></Boton>
                <Boton derecho onClick={siguiente}><FaRegArrowAltCircleRight /></Boton>
            </Controles>
        </ContenedorPrincipal>
    )
}

export default Banner