import './default.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Vop from "./Vop"
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const App = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />}/>
                    <Route exact path="/vop" render={props => <Vop {...props} />}/>
                </Switch>
            </Router>
        </>
    );
};

export default App;
