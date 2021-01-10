import { useState, useEffect, useCallback, useRef } from 'react';
import { getPrefixCls } from '../../Util/themeHelper';
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
    });

    const classPre = `${getPrefixCls()}-menugroup`;

    return (
        <div className={classNames(`${classPre}`, { [`${classPre}-selected`]: selected })}>
            <a ref={menuRef} className={`${classPre}-button`} onClick={handleDropMenuClick}>
                <span>{props.title}</span>
                <img src={logoSvg}></img>
            </a>
            <div className={classNames(`${classPre}-pop`, { "hide": !selected })}>
                {props.children}
            </div>
        </div>
    )
}

export const MenuGroupTitle = (props) => {
    const classPre = `${getPrefixCls()}-menugroup`;
    return (
        <div className={`${classPre}-title`}>{props.children}</div>
    )
}