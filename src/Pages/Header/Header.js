
import React, { useState, useEffect } from 'react';
import { Route, withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuGroup } from '../../Components';
import { initProject } from '../../Redux/Project/aciton';
import { NewProject } from '../index';
import './Header.scss';

const Header = props => {
    const [createProject, setCreateProject] = useState(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initProject());
    }, []);

    const projects = useSelector(state => {
        return state.projects.projects;
    });

    return (
        <header className="header-top">
            <nav>
                <Menu to="/MyWork">My Work</Menu>
                <MenuGroup title="Project">
                    <Menu to="" onClick={() => { setCreateProject(true) }}>Create Project</Menu>
                    {createProject && <NewProject></NewProject>}
                    {
                        projects && projects.map(project => {
                            return <Menu to={`/project/${project.id}`}>{project.projectname}</Menu>
                        })
                    } 
                </MenuGroup>
            </nav>
            <div>
                Profile Menu
            </div>
        </header>
    )
}

export default withRouter(Header);