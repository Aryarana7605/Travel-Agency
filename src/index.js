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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
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


    </Route>
  )
);

root.render(<RouterProvider router={router} />);