import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "../src/components/Home/Home.jsx";
import Login from "../src/components/register/Login";
import Signup from "../src/components/register/Signup"
import Setpass from "../src/components/register/SetPass"
import ForgotPass from "../src/components/register/ForgotPass"
import SetPass from "../src/components/register/SetPass"
import VerifyCode from "../src/components/register/VerifyCode.jsx";
import AddPayment from "./components/register/AddPayment.jsx";
import Flights from "./components/flights/Flights.jsx";
import FlightsBooking from "./components/flights/FlightsBooking.jsx";
import FlightsCardDetail from "./components/Filters/FlightsCardDetail.jsx";
import BookingDetails from "./components/flights/BookingDetails.jsx";
import InvoicePage from "../src/components/Filters/InvoicePage.jsx"
import HotelLp from "./components/Hotels/HotelLp.jsx";
import HotelsListing from "./components/Hotels/HotelsListing.jsx";
import HotelsOverview from "./components/Hotels/HotelsOverview.jsx";
import HotelBilling from "./components/Hotels/HotelBilling.jsx";
import Favourites from "./components/Hotels/Favourites.jsx";
import Account from "./components/account/Account.jsx";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/set-password" element={<Setpass />} />
      <Route path="/forgot-password" element={<ForgotPass/>} />
      <Route path="/set-password" element={<SetPass/>} />
      <Route path="/verify-code" element={<VerifyCode/>} />
      <Route path="/add-payment-method" element={<AddPayment/>} />

{/* flights section */}

      <Route path="/flights" element={<Flights/>} />
      <Route path="/flights-booking" element={<FlightsBooking/>} />
      <Route path="/flight-path" element={<FlightsCardDetail/>}/>
      <Route path="/booking-details" element={<BookingDetails/>} />
      <Route path="/booking-invoice" element={<InvoicePage/>} />

{/* Hotels Section */}
      <Route path="/hotels" element={<HotelLp/>} />
      <Route path="/hotels-listing" element={<HotelsListing/>} />
      <Route path="/hotel-overview" element={<HotelsOverview/>} />
      <Route path="/hotel-billing" element={<HotelBilling/>} /> 
      <Route path="/favourites" element={<Favourites/>}  />
      <Route path="/account" element={<Account/>} />

    </Route>
  )
);

root.render(<RouterProvider router={router} />);