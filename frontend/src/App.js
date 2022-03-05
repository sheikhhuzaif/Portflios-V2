import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseApp from "./baseApp";
import PortfolioApp from "./portfolioApp";
import d from '.\\images\\d.jpg';



function App() {

    return (
    <Router>
    <Routes>
    <Route path="/dashboard/*" element={<BaseApp />}/>
    <Route path="/view/*" element={<PortfolioApp />}/>
    </Routes>
      </Router>
    );


}

export default App;
