import { useState } from 'react';
import classNames from 'classnames';
import './MenuGroup.scss';

import logoSvg from '../../Assets/Images/arrowdown.svg';

export const MenuGroup = (props) => {
    const [selected, setSelected] = useState(false);
 
    return (
        <div className={classNames("menu-group", { "menu-group-selected": selected })}>
            <a className="menu-group-button" onClick={() => { setSelected(!selected) }}>
                <span>{props.title}</span>
                <img src={logoSvg}></img>
            </a>
            <div className={classNames("menu-group-pop", { "hide": !selected })}>
                {props.children}
            </div>
        </div>

    )
}