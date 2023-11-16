import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header/Header";

interface HomeProps {}

const App: React.FC<HomeProps> = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
