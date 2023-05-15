import './Logout.css';
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




const Logout = () => {

    // const history = useHistory();
    const navigateTo = useNavigate();

    const showToastMessage = () => {
        toast.success('login successfully..!', {
            position: toast.POSITION.TOP_CENTER
        });
        // history.push('/');
        navigateTo('/');
    };


  return (
    <div className="logout-container">
        <div className="logout-content">
            <h1>You are successfully logged out!</h1>
            <p>Thank you for using our application ..Have a great day...</p>
             <button onClick={showToastMessage}>Login</button>
        </div>
        
    </div>
  )
}

export default Logout
