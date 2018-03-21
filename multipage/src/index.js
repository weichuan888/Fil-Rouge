import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact.js';
import Hello from './components/Hello/Hello.js';
import News from './components/Magazine/Magazine.js';
import Jeux from './components/Jeux/Jeux.js';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
const Root=()=>{
  return(
  <Router>
    <div className="superMain" >
      <div className="Header">
          <ul className="nav">
              <li className="link1"><Link to="/">Hello</Link></li>
              <li className="link2"><Link to="/News">News</Link></li>
              <li className="link3"><Link to="/Jeux">Jeux</Link></li>
              <li className="link4"><Link to="/Contact">Contact</Link></li>
          </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Hello}/>
        <Route exact path="/News" component={News}/>
        <Route exact path="/Jeux" component={Jeux}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route component={Hello}/>
      </Switch>
    </div>
  </Router>
)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
