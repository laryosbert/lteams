
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
            {/* </Switch> */}
        </Router>
    )
}

export default RouteConfig;