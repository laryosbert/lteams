import { createPortal } from 'react-dom';
import { getPrefixCls } from '../../Util/themeHelper';
import './Modal.scss';

export const Modal = props => {
    const { children, visible, onClose, header } = props;

    const classPre = `${getPrefixCls()}-modal`;
    const modal = createPortal(
        <div className={classPre}>
            <div className={`${classPre}-overlay`}>
            </div>
            <div className={`${classPre}-dialog`}>
                <div className={`${classPre}-header`}>
                    <span>{header}</span>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={`${classPre}-content`}>
                    {children}
                </div>
            </div>
        </div>
        ,
        document.body
    )

    return (
        <>
            {visible && modal}
        </>
    );
}