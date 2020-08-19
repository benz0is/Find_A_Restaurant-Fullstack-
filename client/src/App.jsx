import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePage from "./routes/UpdatePage";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import Home from "./routes/Home";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            ></Route>
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantdetailPage}
            ></Route>
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;