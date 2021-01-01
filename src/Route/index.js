
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import Header from '../Pages/Header/Header';
import AllUser from '../Pages/AllUser';
import AddUser from '../Pages/AddUser';
import SetStateTemp from '../Pages/Template/SetStateTemp';
import { ThrottleHook } from '../Pages/Template/ThrottleHook';
import { UseEffectTemp } from '../Pages/Template/UseEffectTemp';
import { UseReducerTemp } from '../Pages/Template/UseReducerTemp';
import { UseStateTemp } from '../Pages/Template/UseStateTemp';
import { UseRefTemp } from '../Pages/Template/UseRefTemp';

function RouteConfig() {

    return (
        <Router>
            {/* <Switch> */}
            <Route exact path="/">
                <span>Home</span>
            </Route>
            <Route path="/"><Header></Header></Route>
            <Route exact path="/"><AllUser></AllUser></Route>
            <Route exact path="/"><AddUser></AddUser></Route>
            <Route path="/SetStateTemp"><SetStateTemp></SetStateTemp></Route>
            <Route path="/ThrottleHook"><ThrottleHook></ThrottleHook></Route>
            <Route path="/UseEffectTemp"><UseEffectTemp></UseEffectTemp></Route>
            <Route path="/UseReducerTemp"><UseReducerTemp initialCount={0}></UseReducerTemp></Route>
            <Route path="/UseStateTemp"><UseStateTemp></UseStateTemp></Route>
            <Route path="/UseRefTemp"><UseRefTemp></UseRefTemp></Route>
            {/* </Switch> */}
        </Router>
    )
}

export default RouteConfig;