import './App.css';
import Index from './Page/Index';
import Login from './Page/Login';
import { BrowserRouter, Route, Router, HashRouter, Switch } from 'react-router-dom';
import Signup from './Page/Signup';
import Home from './Page/Home';
import Test from './Page/test';
import Profile from './Page/Profile';
import Reset from './Page/Resetpw';
import Forex from './Page/Forex';
import Navebar from './Page/Navebar';
import Forexai from './Page/Forexai';

function App() {

  return (

    <BrowserRouter>
   
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path ='/Index/Login' component={Login} />
        <Route path ='/Index/Signup' component={Signup}/>
        <Route path ='/Index/Home' component={Home}/>
        <Route path ='/Index/Profile' component={Profile} />
        <Route path ='/Index/Reset' component={Reset} />
        <Route path ='/Index/Forex' component={Forex} />
        <Route path ='/Index/Test' component={Test} />
        <Route path ='/Index/Forexai' component={Forexai} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
