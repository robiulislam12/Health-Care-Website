import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import AuthProvider from "./contexts/AuthProvider";


export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='*' component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
