import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseApp from "./baseApp";
import PortfolioApp from "./portfolioApp";
import ResumeApp from "./resumeApp";
import Onboarding from "./pages/onboarding/Onboarding";



function App() {

    return (
        <Router>
            <Routes>
                <Route path="/dashboard/*" element={<BaseApp />} />
                <Route path="/view/*" element={<PortfolioApp />} />
                <Route path="/resume" element={<ResumeApp />} />
                <Route path="/onboarding/" element={<Onboarding />} />
            </Routes>
        </Router>
    );


}

export default App;
