import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages
import HomePage from './pages/home/HomePage'
import Menu from './pages/Menu/MenuPage'
import ProductForm from './pages/products/ProductForm'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import CartPage from './pages/cart/CartPage'

//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

//Provider
import { ProductProvider } from './context/providers/ProductsContext'
import { AuthProvider } from './context/providers/AuthContext'
import { CartProvider } from './context/providers/CartContext'
import Nosotros from './pages/nosotros/Nosotros'
import Reserva from './pages/reservas/Reserva'
import Servicios from './pages/servicios/Servicios'
import Contactos from './pages/contacto/Contactos'
import Mapa from './pages/mapa/Mapa'


function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <ProductProvider>
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/products/new' element={<ProductForm />} />
              <Route path='/auth/signup' element={<Signup />} />
              <Route path='/auth/signin' element={<Signin />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/reserva' element={<Reserva />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/contactos' element={<Contactos />} />
              <Route path='/mapa' element={<Mapa />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
