import React from 'react'
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>

        {/* Payment Section - Delivery */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Ave</p>
            <p>Vancouver, BC</p>
          </div>
        </div>

        {/* Payment Section - Review Item */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
                key={item.id} 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          
        </div>

        {/* Payment Section - Payment Method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe will go here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
