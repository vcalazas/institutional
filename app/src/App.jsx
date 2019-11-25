import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Test from "./components/templates/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Test} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
