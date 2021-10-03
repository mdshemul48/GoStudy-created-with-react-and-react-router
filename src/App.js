import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// all components
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Products from "./components/Product/Products";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/contact'>
          <ContactUs />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
