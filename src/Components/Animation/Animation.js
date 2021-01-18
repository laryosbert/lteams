import { useState, useEffect } from 'react';
import './Animation.scss';
import classNames from 'classnames';

export function Animation(props) {

    const classname = classNames(props.className, props.visible ? "animate-inleft" : "animate-outleft");
    return (
        <div className={classname}>
            {props.children}
        </div>
    );
}  