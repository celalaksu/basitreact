import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="main-content">
          <Content />
          <Sidebar/>          
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
