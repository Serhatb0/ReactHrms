/* eslint-disable no-unused-vars */
import "semantic-ui-css/semantic.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import Dashboard from "./layouts/Dashboard";
import EmployeeDashboard from "../src/EmployeeLayouts/EmployeeDashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  const [isEmployee, setIsEmployee] = useState(true);

  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={EmployeeDashboard} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
