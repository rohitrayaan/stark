import Navbar from "./Header/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Articles from "./pages/article";
import Contact from "./pages/contact";
import Footer from "./Footer/footer";


import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
     
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Articles} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
