import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./home/home.jsx"


const Routes = () => {
  return (
    <Router>
        <Switch>
        <Route path="/" exact Component={Home}/>
        </Switch>
    </Router>
  )
}

export default Routes