import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import FormComponent from "./pages/edit/FormComponent";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

const Routing = () => {

    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/edit", element: <FormComponent /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/resume", element: <Resume /> },

    ]);
    return routes
}

export default function BaseApp() {


    return (
        <div className="">
            <Sidebar />
            <div style={{ paddingLeft: "250px", paddingRight: "260px" }}>
                <Routing />
            </div>
        </div>);


}


