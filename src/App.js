import React, { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './css/index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = () => (
      <Router>
            <Fragment>
                  <Navbar />
                  <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                        <Route exact path='/contact' component={Contact}/>
                  </Switch>
            </Fragment >
      </Router>
)

export default App;
