
import Nav from "../components/nav/nav";
import "./App.css";


import {Outlet} from "react-router-dom";
const App = () => {
  return (
    
    <div>
      <Nav />
      <Outlet />
          
    </div>
  )
}

export default App