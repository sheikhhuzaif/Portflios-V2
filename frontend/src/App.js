import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import FormComponent from "./form/FormComponent";
import a from '.\\images\\a.jpg';
import b from '.\\images\\b.jpg';
import c from '.\\images\\c.jpg';
import d from '.\\images\\d.jpg';


function App() {
  return (
    // <div>
    //   <FormComponent />
    // </div>
    // <div style={{backgroundImage:`url(${d})`}}>
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          {/* <FormComponent /> */}
            <Home />
          </Route>
          <Route path="/edit">
          <FormComponent />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
    // </div>
  );
}

export default App;
