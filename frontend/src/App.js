import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormComponent from "./form/FormComponent";

function App() {
  return (
    
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/edit">
            <FormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
