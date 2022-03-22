import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./pages/edit/FormComponent";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Temp1 from "./portfolioTemplates/template1/Temp1"
import Temp2 from "./portfolioTemplates/template2/Temp2"
import Temp3 from "./portfolioTemplates/template3/Temp3"
// import Temp4 from "./portfolioTemplates/template4/Temp4";


function App() {

  if (0) {
    return (
      <div>welcome new uder</div>
    );
  }

  else {
    return (
      <div >
        <Router>
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/dashboard/edit" element={<FormComponent />} />
              <Route path="/dashboard/portfolio" element={<Portfolio />} />
              <Route path="/dashboard/resume" element={<Resume />} />
            </Routes>
          </div>
        </Router>


        {/* <Temp1/> */}
        {/* <Temp2/> */}
        {/* <Temp3/> */}
        {/* <Temp4 /> */}
      </div>
    );
  }

}

export default App;
