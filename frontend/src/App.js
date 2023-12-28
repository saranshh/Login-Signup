import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";


import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser, updateUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import axios from 'axios';
import NotFound from "./component/layout/NotFound/NotFound";
import toast, { Toaster } from 'react-hot-toast';


function App() {

const {isAuthenticated , user} = useSelector(state => state.user)

const [stripeApiKey, setStripeApiKey] = useState("pk_test_51MLn1pSIVwHQbNUxYlxmdNRWCVlZaPutPiRE24G6Ld7a8s8fRXspf1Nm26n3NsnZjPNcqjf5EZoBysdphIYN6n2F00u4MbZBZP");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

React.useEffect(() => {
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"]
    }
  });
  store.dispatch(loadUser());
}, []);

  return (
    <Router>
        <Routes>
        {/* <Route exact path = "/" element={<Home />} /> */}
        <Route exact path = "/" element={<LoginSignUp />} />
        <Route exact path = "/password/forgot" element={<ForgotPassword />} />
        <Route exact path = "/password/reset/:token" element={<ResetPassword />} />
        <Route path = '*' element={<NotFound />}/>
        </Routes>
        
        <Footer />
    </Router>
   
  );
}

export default App;
