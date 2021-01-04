import { useState, useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import './MenuGroup.scss';

import logoSvg from '../../Assets/Images/arrowdown.svg';

export const MenuGroup = (props) => {
    const [selected, setSelected] = useState(false);
    const menuRef = useRef(null);

    const handleClosePop = useCallback((event) => {
        if (!menuRef.current.contains(event.target)) {
            setSelected(false);
        }
    });

    const handleDropMenuClick = () => {
        setSelected(!selected);
    }

    useEffect(() => {
        window.addEventListener("mouseup", handleClosePop);
        return () => {
            window.removeEventListener("mouseup", handleClosePop);
        }
    })

    return (
        <div className={classNames("menu-group", { "menu-group-selected": selected })}>
            <a ref={menuRef} className="menu-group-button" onClick={handleDropMenuClick}>
                <span>{props.title}</span>
                <img src={logoSvg}></img>
            </a>
            <div className={classNames("menu-group-pop", { "hide": !selected })}>
                {props.children}
            </div>
        </div>
    )
}