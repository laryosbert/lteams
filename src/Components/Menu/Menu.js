import { Link } from 'react-router-dom';
import { getPrefixCls } from '../../Util/themeHelper';
import classNames from 'classnames';
import './Menu.scss';

const Menu = props => {
    const classPre = `${getPrefixCls()}-menu`;
    const menuClassName = classNames([`${classPre}-item`], { [`${classPre}-item-top`]: props.type === "top" });
    return (
        <Link to={props.to} className={`${classPre}-link`}
            onClick={props.onClick}>
            <div className={menuClassName}>
                {props.children}
            </div>
        </Link>
    )
}

Menu.Divider = props => {
    const classPre = `${getPrefixCls()}-menu`;
    return (<div className={`${classPre}-divider`}></div>);
}

export { Menu };