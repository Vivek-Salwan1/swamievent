import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { HashRouter, Route, Routes } from 'react-router-dom';
import SpecialTours from './componanats/SpecialTours';
import ContactUs from './componanats/ContactUs';
import AboutUs from './componanats/AboutUs';
import ArticleDetails from './common/ArticleDetails';
import ServiceDetails from './common/ServiceDetails';
import AllDomestic from './componanats/AllDomestic';
import AllInternational from './componanats/AllInternational';
import TermsAndConditions from './componanats/TermsAndConditions';
import PrivacyPolicy from './componanats/PrivacyPolicy';
import DomesticCardDetails from './common/DomesticCardDetails';
import InterCardDetails from './common/InterCardDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define routes using HashRouter
const Routing = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="specialTours" element={<SpecialTours />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="ArticleDetails/:articleID" element={<ArticleDetails />} />
      <Route path="ServiceDetails/:serviceID" element={<ServiceDetails />} />
      <Route path="allDomestic" element={<AllDomestic />} />
      <Route path="allInternational" element={<AllInternational />} />
      <Route path="termsAndConditions" element={<TermsAndConditions />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="DomesticCardDetails/:state" element={<DomesticCardDetails />} />
      <Route path="InterCardDetails/:country" element={<InterCardDetails />} />
    </Routes>
  </HashRouter>
);

// Render the routing setup
root.render(

    <Routing />

);