import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
