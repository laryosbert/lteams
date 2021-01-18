import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Header, LeftNav } from '../../Pages';
import './Master.scss';

const Master = (props) => {
    return (
        <div className="lt-master">
            <Header></Header>
            <div className="lt-main">
                <Route path="/project/:projectid"><LeftNav></LeftNav></Route>
                <div className="lt-content">{props.children}</div>
            </div>
        </div>)
}

export default Master;