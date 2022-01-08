import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import App from "../App";

//Makes the page route, and ensures the client is logged in.
const Routes: React.FunctionComponent = (props) => {

  return (
    <BrowserRouter>
        <Route path="/">
          <App />
        </Route>
    </BrowserRouter>
  );
}

export default Routes