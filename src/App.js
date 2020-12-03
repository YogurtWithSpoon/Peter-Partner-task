import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardSelectPage from "./pages/CardSelectPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/selectuser">
          <CardSelectPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
