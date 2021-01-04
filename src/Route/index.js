
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import { Master } from '../Pages'; 
import SetStateTemp from '../Pages/Template/SetStateTemp';
import { ThrottleHook } from '../Pages/Template/ThrottleHook';
import { UseEffectTemp } from '../Pages/Template/UseEffectTemp';
import { UseReducerTemp } from '../Pages/Template/UseReducerTemp';
import { UseStateTemp } from '../Pages/Template/UseStateTemp';
import { UseRefTemp } from '../Pages/Template/UseRefTemp';

function RouteConfig() {

    return (
        <Router>
            <Master>
                <Switch>                    
                    <Route path="/SetStateTemp"><SetStateTemp></SetStateTemp></Route>
                    <Route path="/ThrottleHook"><ThrottleHook></ThrottleHook></Route>
                    <Route path="/UseEffectTemp"><UseEffectTemp></UseEffectTemp></Route>
                    <Route path="/UseReducerTemp"><UseReducerTemp initialCount={0}></UseReducerTemp></Route>
                    <Route path="/UseStateTemp"><UseStateTemp></UseStateTemp></Route>
                    <Route path="/UseRefTemp"><UseRefTemp></UseRefTemp></Route>
                </Switch>
            </Master>

        </Router>
    )
}

export default RouteConfig;