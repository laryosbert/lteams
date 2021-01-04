import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Header, LeftNav } from '../../Pages';

const Master = (props) => {
    return (
        <div>
            <Header></Header>
            <div>
                <Route path="/project"><LeftNav></LeftNav></Route>
                <div>{props.children}</div>
            </div>
        </div>)
}

export default Master;