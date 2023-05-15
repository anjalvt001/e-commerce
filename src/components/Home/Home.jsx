import './Home.css';
import { useState , useEffect } from 'react';
import { getAllProducts  } from '../../ApiServices/api';
import { Link } from 'react-router-dom';


const Home = () => {

  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {

    fetchAllProducts()
    
  
    
  }, []);
  





  return (
    <div className="product-grid">

{
  products.map((product) => (

    <div className="product" key={product.id}>
        <img src={product.image} alt="product image" />
        <h2>{product.title}</h2>
        <p>
          
            <span className="price">${product.price}</span>
        </p>
        <Link to={`/product/${product.id}`}>
          <button>Product Details</button>
        </Link>

     </div>

  ))
}

      
      
    </div>
  )
}

export default Home
