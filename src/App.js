import React, { useEffect } from "react";
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Orders from './Orders/Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Hc07vGMhNc37TEyyumqKPOydOAePthKfNgQsCFo494MbqfMSDErjjWowXTuLpwTvvmY1o1fsApJXXvWFDufx1Hd00QrKOqgdu');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The USER is >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
