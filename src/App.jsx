import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./assets/Icons/Loading.png";

const Home = lazy(() => import("./Components/Home/Home"));
const Services = lazy(() => import("./Components/Services/Services"));
const Clients = lazy(() => import("./Components/Clients/Clients"));
const Career = lazy(() => import("./Components/Career/Career"));
const Contact = lazy(() => import("./Components/Home/Contact"));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen animate-spin">
              <img width={150} height={150} src={Loader} alt="" />
            </div>
          }
        >
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact us" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
