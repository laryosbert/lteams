import { Link } from 'react-router-dom';
import './Menu.scss';

export const Menu = props => {
    return (
        <div>
            <Link to={props.to} className="menu-item" onClick={props.onClick}>{props.children}
            </Link>
        </div>
    )
}