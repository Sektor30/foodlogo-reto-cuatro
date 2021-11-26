import React from 'react'
import Banner from '../../components/HomeBanner/Banner'
import Eventos from '../../components/HomeEventos/Eventos'
import Homemenu from '../../components/HomeMenu/HomeMenu'
import Comments from '../../components/HomeReseñas/Comments'
import Restaurante from '../../components/HomeRestaurante/Restaurante'

function HomePage() {
    return (
        <div>
            <Banner/>
            <Restaurante/>
            <Homemenu />
            <Eventos />
            <Comments />
        </div>
    )
}

export default HomePage