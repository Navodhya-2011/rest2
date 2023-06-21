import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "pages/NotFound";
const AddressBook = React.lazy(() => import("pages/AddressBook"));
const Favourite = React.lazy(() => import("pages/Favourite"));
const MyOrdersOne = React.lazy(() => import("pages/MyOrdersOne"));
const MyOrders = React.lazy(() => import("pages/MyOrders"));
const MyAccountOne = React.lazy(() => import("pages/MyAccountOne"));
const Loyaltyprogram = React.lazy(() => import("pages/Loyaltyprogram"));
const MyAccount = React.lazy(() => import("pages/MyAccount"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const OrderOnline = React.lazy(() => import("pages/OrderOnline"));
const Menu = React.lazy(() => import("pages/Menu"));
const OurTeam = React.lazy(() => import("pages/OurTeam"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
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
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
