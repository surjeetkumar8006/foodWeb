import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
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
