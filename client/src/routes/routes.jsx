import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./home/home.jsx"
import Sobre from "../components/nav/nav.jsx"

const Routes = () => {
  return (
    <Router>
        <Switch>
        <Route path="/" exact Component={Home}/>
        <Route path="/sobre" Component={Sobre}/>
        </Switch>
    </Router>
  )
}

export default Routes