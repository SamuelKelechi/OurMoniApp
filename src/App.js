import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';
import HeaderNav from "../src/Component/Header/HeaderNav"
import Footer from "../src/Component/Footer/Footer"
import Inforgraph from "./Component/InfoGraph/Inforgraph"
import About from "./Component/About/About"
import Login from "./Component/Login/Login"
import Blog from './Component/Blog/Blog';
import SignUp from "./Component/SignUp/SignUp"

function App() {
  return (
    <>
   
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infograph" component={Inforgraph} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
