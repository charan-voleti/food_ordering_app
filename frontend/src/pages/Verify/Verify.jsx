
import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", { success, orderId });
      if (response.data.success) {
        setTimeout(() => navigate("/myorders"), 2000);  
      } else {
        setTimeout(() => navigate("/"), 2000);       
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      setTimeout(() => navigate("/"), 2000);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className='verify'>
      <div className="spinner"></div>
      <p>Verifying Payment...</p>
    </div>
  );
};

export default Verify;
