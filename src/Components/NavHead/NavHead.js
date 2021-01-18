
import { getPrefixCls } from '../../Util/themeHelper';
import projectavatar from '../../Assets/Images/projectavatar.svg';
import classNames from 'classnames';
import './NavHead.scss';

export const NavHead = (props) => {
    const classPre = `${getPrefixCls()}-navhd`;
    return (
        <div className={classNames(classPre, props.className)}>
            <span className={`${classPre}-icon`}><img src={projectavatar} className={`${classPre}-img`}></img></span>
            <span className={`${classPre}-title`}>
                <h2>{props.title}</h2>
                <span>{props.desc}</span>
            </span>
        </div>)
}