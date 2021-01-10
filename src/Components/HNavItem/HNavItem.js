import { getPrefixCls } from '../../Util/themeHelper';
import classNames from 'classnames';
import './HNavItem.scss';

export const HNavItem = props => {
    const classPre = `${getPrefixCls()}-hnav`;
    const navClassName = classNames(
        `${classPre}-item`,
        {
            [`${classPre}-item-selected`]: props.selected
        }
        , props.className
    );

    return (
        <div className={navClassName}>
            {props.children}
        </div>
    )
}