import "semantic-ui-css/semantic.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import Dashboard from "./layouts/Dashboard";
import EmployeeDashboard from "../src/EmployeeLayouts/EmployeeDashboard";
import Deneme from "./deneme";

function App() {
  const [isEmployee, setIsEmployee] = useState(false);

  return (
    <div className="App">
      {isEmployee ? <EmployeeDashboard/> : <Dashboard/>}
    </div>

    // <Deneme></Deneme>
    
  );
}

export default App;
