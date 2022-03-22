import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import PortfolioView from "./pages/portfolioView/index";
import FormComponent from "./pages/edit/FormComponent";

const Routing=()=>{

const routes = useRoutes([
{path:"/:username", element:<PortfolioView/>},

]);
return routes
}

export default function PortfolioApp() {


    return (
    <Routing/>);


}

