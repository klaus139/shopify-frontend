import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

import TermAndCondition from './pages/TermAndCondition';
import ShipPolicy from './pages/ShipPolicy';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="product" element={<OurStore />}/>
        <Route path="product/:id" element={<SingleProduct />}/>
        <Route path="blogs" element={<Blog />}/>
        <Route path="blog/:id" element={<SingleBlog />}/>
        <Route path="compare-product" element={<CompareProduct />}/>
        <Route path="wishlist" element={<Wishlist />}/>
        <Route path="login" element={<Login />}/>
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="reset-password" element={<ResetPassword />}/>
        <Route path="refund-policy" element={<RefundPolicy />}/>
        <Route path="shipping-policy" element={<ShipPolicy />}/>
        <Route path="terms-conditions" element={<TermAndCondition />}/>

      </Route>

    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
