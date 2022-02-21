import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./form/FormComponent";
import a from '.\\images\\a.jpg';
import b from '.\\images\\b.jpg';
import c from '.\\images\\c.jpg';
import d from '.\\images\\d.jpg';


function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/dashboard/edit" element={<FormComponent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
