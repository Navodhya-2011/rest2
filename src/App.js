import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home1 from "pages/Home1/index";
import Menu from "pages/Menu/index";
import OurTeam from "pages/OurTeam/index";
import Signup from "pages/Signup/index";
import Login from "pages/Login/index";
import OrderOnline from "pages/OrderOnline";
import Reservation from "pages/Reservation";
import MyAccount from "pages/MyAccount";
import Loyaltyprogram from "pages/Loyaltyprogram";
import MyAccountOne from "pages/MyAccountOne";
import MyOrders from "pages/MyOrders";
import MyOrdersOne from "pages/MyOrdersOne";
import Favourite from "pages/Favourite";
import AddressBook from "pages/AddressBook";


const App = () => {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/loyaltyprogram" element={<Loyaltyprogram />} />
        <Route path="/myaccountone" element={<MyAccountOne />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/myordersone" element={<MyOrdersOne />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/addressbook" element={<AddressBook />} />
      </Routes>
    
      </BrowserRouter>
      
    </div>
  );
};
export default App;






