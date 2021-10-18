import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Doctors from "./components/pages/Doctors";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Services from "./components/pages/Services";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";



export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <PrivateRoute  path='/doctors' >
            <Doctors/>
          </PrivateRoute>
          <PrivateRoute  path='/service/:serviceId'>
            <Services/>
          </PrivateRoute>
          <Route  path='/contact' component={Contact}/>
          <Route  path='/login' component={Login}/>
          <Route  path='*' component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
