import React from "react";
// import { Redirect } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./componet/Header";
import BlogListing from "./Page/BlogListing";
import "./App.scss";
import BlogDetail from "./Page/BlogDetail";
import About from "./Page/About";
import BlogAdd from "./Page/BlogAdd";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact component={BlogListing} />
          <Route path="/about" component={About} />
          <Route path="/blog/:blogId" component={BlogDetail} />
          <Route path="/blog" component={BlogAdd} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
