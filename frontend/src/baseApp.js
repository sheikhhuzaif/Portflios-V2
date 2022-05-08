import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import FormComponent from "./pages/edit/FormComponent";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import { useQuery, gql } from "@apollo/client";

const GET_BASIC_INFO = gql`
{
profileCompletion
}
`

const Routing = () => {

    const { loading, error, data } = useQuery(GET_BASIC_INFO);
    const showPopup = data?.profileCompletion;

    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/edit", element: <FormComponent showPopup={showPopup} /> },
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


