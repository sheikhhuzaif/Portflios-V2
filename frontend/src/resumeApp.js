import "./App.css";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import ResumeView from "./pages/resumeView/index";


const Routing=()=>{

const routes = useRoutes([
{path:"/", element:<ResumeView/>},
]);
return routes
}

export default function ResumeApp() {

    return (
    <Routing/>);


}

