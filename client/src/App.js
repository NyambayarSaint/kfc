import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import LandingPage from "./views/LandingPage";
import NotFound from "./views/NotFound";

import CoLogin from "./views/user/Login";
import CoRegister from "./views/user/Register";
import CoIndex from "./views/user/Index";

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

localStorage.setItem('url', 'https://kfc.tavanbogd.com');

function App() {

  const [redirectUnauthorized, setredirectUnauthorized] = useState(false)
  const [loaded, setLoaded] = useState({ status: false, result: "" });

  useEffect(() => {

    async function send() {
      try {
        let res = await axios(localStorage.getItem('url')+"/authenticate");
        if(res.data === "Co") return setLoaded({status: true, result: res.data})
        throw new Error ('Something wrong')
      } catch (e) {
        setredirectUnauthorized(true)
      }
    }
    send();
  }, []);

  return (
    <Router>
      <div className="App">
        {redirectUnauthorized ? <Redirect to="/landing"/>:null}
        <Switch>
          {!loaded.status ? (
            <Route path="/" exact component={Loading} />
          ) : loaded.result === "Co" ? (
            <Route path="/user" component={CoIndex} />
          ) : null}
          <Route path="/landing" component={LandingPage} />
          <Route path="/user/login" component={CoLogin} />
          <Route path="/user/register" component={CoRegister} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

const Loading = () => {
return <p>Loading...</p>;
};

export default App;
