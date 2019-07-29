import React from "react";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Temperature from "./Components/Temperature/Temperature";
import CustomizeImage from "./Components/CustomizeImage/CustomizeImage";
import Celebrities from "./Components/Celebrities/Celebrities";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="list-items">
          Home
        </Link>
        <Link to="/temperature" className="list-items">
          Temperature
        </Link>
        <Link to="/customize-image" className="list-items">
          Customize Image
        </Link>
        <Link to="/celebrities" className="list-items">
          Celebrities
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/customize-image" exact component={CustomizeImage} />
        <Route path="/celebrities" exact component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
