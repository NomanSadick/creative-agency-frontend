import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Customer from './components/Customer/Customer/Customer';
import Order from './components/Customer/Customer/Order/Order';
import Review from './components/Customer/Review/Review';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/customer">
            <Customer></Customer>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
