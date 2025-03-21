import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Carousel from "./Pages/Carousel";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
export default App;