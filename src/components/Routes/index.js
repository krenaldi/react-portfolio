import React from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Portfolio from '../../pages/Portfolio';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
)

export default Main;