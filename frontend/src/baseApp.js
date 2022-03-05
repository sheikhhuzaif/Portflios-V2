import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import FormComponent from "./form/FormComponent";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import PortfolioView from "./pages/portfolioView/index";
import d from '.\\images\\d.jpg';

const Routing=()=>{

const routes = useRoutes([
{path:"/", element:<Home/>},
{path:"/edit", element:<FormComponent/>},
{path:"/portfolio", element:<Portfolio/>},
{path:"/resume", element:<Resume/>},

]);
return routes
}

export default function BaseApp() {


    return (<><Sidebar/>
    <Routing/></>);


}


