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
import ServiceList from './components/Customer/ServiceList/ServiceList';
import AddService from './components/Admin/AddService/AddService';
import Admin from './components/Admin/Admin/Admin';
import AdminServiceList from './components/Admin/AdminServiceList/AdminServiceList';
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
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
