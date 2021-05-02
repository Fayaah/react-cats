import React from 'react';
import Poll from "./poll";
import Stats from "./stats";
import Header from "../components/header/header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route path='/' component={Poll} exact={true} />
                <Route path='/stats' component={Stats} exact={true} />
            </Switch>
        </Router>
    );
}

export default App;