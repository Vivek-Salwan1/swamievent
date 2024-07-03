import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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

const allRoutes  =createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'specialTours',
      element:<SpecialTours/>

    },
    {
      path:'aboutUs',
      element:<AboutUs/>
    },
    {
      path:'contactUs',
      element:<ContactUs/>
    },
    {
      path:'ArticleDetails/:articleID',
      element:<ArticleDetails/>
    },
    {
      path:'ServiceDetails/:serviceID',
      element:<ServiceDetails/>
    },
    {
      path:'allDomestic',
      element:<AllDomestic/>
    },
    {
      path:'allInternational',
      element:<AllInternational/>
    },
    {
      path:'termsAndConditions',
      element:<TermsAndConditions/>
    },
    {
      path:'PrivacyPolicy',
      element:<PrivacyPolicy/>
    },
    {
      path:'DomesticCardDetails/:state',
      element:<DomesticCardDetails/>
    },
    {
      path:'InterCardDetails/:country',
      element:<InterCardDetails/>
    }
  ]
)

root.render(
  <React.StrictMode>
  <RouterProvider router={allRoutes}/> 
  </React.StrictMode>
);
