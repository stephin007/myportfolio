import React, { Fragment, useEffect} from 'react';
import ReactGa from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './css/index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import Project from './components/Project';

function App(){
      useEffect(()=>{
            ReactGa.initialize('UA-174591512-1')

            // To record Page View
            ReactGa.pageview(window.location.pathname + window.location.search)
      },
        []
      )

      return(
            <Router>
                  <Fragment>
                        <Navbar />
                        <Switch>
                              <Route exact path='/' component={Home}/>
                              <Route exact path='/about' component={About}/>
                              <Route exact path='/projects' component={Project}/>
                              {/* <Route exact path='/contact' component={Contact}/> */}
                        </Switch>
                  </Fragment >
            </Router>
      )
}

export default App;
