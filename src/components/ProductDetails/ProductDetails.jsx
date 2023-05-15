import './ProductDetails.css';
import { useState , useEffect } from 'react';
import { getProductById  } from '../../ApiServices/api';
import { useParams , Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = () => {

    const [details, setDetails] = useState([]);

    const { id } = useParams();

    const fetchProductById = async () => {
        const data = await getProductById(id);
        setDetails(data);

    }

    useEffect(() => {

        fetchProductById();
   
    }, [id]);


    const showToastMessage = () => {
        toast.success(`${details.title} added to cart successfully..!`, {
            position: toast.POSITION.TOP_CENTER
        });
        
        
    };
    
  return (
    <div className="product-details-container">
        <img src={details.image} alt="image" className="product-image"/>
        <div className="product-info">
            <h2 className="product-title">{details.title}</h2>
            <p className="product-desc">{details.description}</p>
            <p className="product-price">${details.price}</p>
            <button className="add-to-cart-btn" onClick={showToastMessage}>Add to cart</button>
            <Link to='/'>
                <button className="go-back-btn">Go back</button>
            </Link>
        </div>
      
    </div>
  )
}

export default ProductDetails;
