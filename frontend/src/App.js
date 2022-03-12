import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./pages/edit/FormComponent";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

function App() {

  if (0) {
    return (
      <div>welcome new uder</div>
    );
  }

  else {
    return (
      <div>
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
      </div>
    );
  }

}

export default App;
