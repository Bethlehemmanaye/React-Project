import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KbloKDhU4O52C8LZsQrnDfu3QuRne5d52Jtc7XQH2czWkV42oDgwKuFSc5XOuwIX6yaqpCWX8lBQlewK2LQ3xwD00pfrEHyVN");

function App() {
  const [{}, dispatch] = useStateValue();

// keep track who signed it 
useEffect(() => {
  // will only run once when the app component loads
    // it attach the listner and when we login it refine the code
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);
    if (authUser){
      
      // the user just logged in / the user was logged in 
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }else{
      // the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
  
}, [])

  return (
    <Router>
      {/*BEM*/}
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path="/payment">
          <Header/>
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        </Route>


        <Route path="/">
          <Header/>
          <Home />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
