import { useState, useEffect, useCallback } from 'react';
import { NavHead, Animation, Spliter } from '../../Components';
import { withRouter, useParams } from "react-router";
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './LeftNav.scss';


const LeftNav = () => {
    let { projectid } = useParams();
    const [showAnimate, setShowAnimate] = useState(true);

    useEffect(() => {
        setShowAnimate(true);
        return () => {
            setShowAnimate(false);
        }
    }, []);

    const project = useSelector(state => {
        return state.projects.projects.find(item => item.id == projectid);
    });

    const handleSpliterClick = useCallback((expand) => {
        setShowAnimate(expand);
    })

    return (
        <>
            <Animation visible={showAnimate} className={classNames('nav-left', showAnimate ? 'nav-left-expand' : 'nav-left-shrink')}>
                <div className='nav-left-main'>
                    <NavHead title={project && project.projectname} desc={'desc'} className='nav-left-head'></NavHead>
                    <nav className='nav-left-menus'>
                        <span>Left Menu</span>
                    </nav>
                </div>
            </Animation>
            <Spliter onClick={handleSpliterClick}></Spliter>
        </>
    )
}

export default withRouter(LeftNav); 