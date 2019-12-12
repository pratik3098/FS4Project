import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../component/login/index';
import Summary from '../component/summary/index';
import Result from '../component/result/index';
import Voting1 from '../component/voting/voting1';
import Voting2 from '../component/voting/voting2';
import Voting3 from '../component/voting/voting3';

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/voting/1" exact={true}>
                    <Voting1/>
                </Route>
                <Route path="/voting/2" exact={true}>
                    <Voting2/>
                </Route>
                <Route path="/voting/3" exact={true}>
                    <Voting3/>
                </Route>
                <Route path="/voting/summary" exact={true}>
                    <Summary/>
                </Route>
                <Route path="/results" exact={true}>
                    <Result/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;
