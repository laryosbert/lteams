import { useRef, useState } from 'react';
import { getPrefixCls } from '../../Util/themeHelper';
import arrowleft from '../../Assets/Images/arrowleft.svg';
import classNames from 'classnames';
import useHoverHook from '../../Hooks/useHoverHook';
import './Spliter.scss';

export const Spliter = (props) => {
    const divRef = useRef(null);
    const butRef = useRef(null);
    const divHover = useHoverHook(divRef);
    const butHover = useHoverHook(butRef);

    const [expand, setExpand] = useState(true);

    const classPre = `${getPrefixCls()}-spliter`;
    const handleToggle = () => {
        props.onClick(!expand);
        setExpand(!expand);
    }

    return (
        <div ref={divRef} className={classNames(`${classPre}`, { [`${classPre}-hover`]: divHover.hover && expand })}>
            <button ref={butRef} onClick={handleToggle} className={classNames(`${classPre}-button`, { [`${classPre}-button-hover`]: butHover.hover })}>
                <span>
                    <img src={arrowleft} className={expand ? `${classPre}-left` : ""}></img>
                </span>
            </button>
        </div>
    )
}