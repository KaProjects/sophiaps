import './default.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Vop from "./Vop"

const App = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />}/>
                    <Route exact path="/vop" render={props => <Vop {...props} />}/>
                </Switch>
            </Router>


            {/*-<br/>*/}
            {/*<Typography class="text">Personal Shopping s. r. o. ©2021</Typography>*/}
        </>
    );
};

export default App;
