
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Logout from '../components/Logout/Logout';
import ProductDetails from '../components/ProductDetails/ProductDetails'



const RoutesLayout = () => {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/logout' exact element={<Logout />} />
          <Route path='/product/:id' exact element={<ProductDetails />} />

          
        </Routes>
      <Footer />
    </Router>
    

    </>
  )
}

export default RoutesLayout;
