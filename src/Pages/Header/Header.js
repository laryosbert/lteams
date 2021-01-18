import React, { useState, useEffect, useCallback } from 'react';
import { Route, withRouter, useLocation } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuGroup, MenuGroupTitle, HNavItem } from '../../Components';
import { initProject, showCreateModal } from '../../Redux/Project/aciton';
import { NewProject } from '../index';
import './Header.scss';

const Header = props => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getFirstPath = useCallback((location) => {
        if (!location || !location.pathname)
            return "";
        const path = location.pathname.toLowerCase();
        const firstSplit = path.replace(/^\//, "").indexOf("/");
        if (firstSplit > 1)
            return path.substring(1, firstSplit + 1);
        else
            return path.replace(/^\//, "");
    });

    const firstPath = getFirstPath(location);

    useEffect(() => {
        dispatch(initProject());
    }, []);

    const projects = useSelector(state => {
        return state.projects.projects;
    });

    const showCreateProject = () => {
        dispatch(showCreateModal());
    }

    return (
        <header className="header-top">
            <nav>
                <HNavItem selected={firstPath === "mywork"}>
                    <Menu to="/MyWork" type="top">My Work</Menu>
                </HNavItem>
                <HNavItem selected={firstPath === "project"}>
                    <MenuGroup title="Project">
                        <MenuGroupTitle>Recent</MenuGroupTitle>
                        <NewProject></NewProject>
                        {
                            projects && projects.map((project, index) => {
                                return <Menu key={project.id}
                                    to={`/project/${project.id}`}
                                >{project.projectname}</Menu>
                            })
                        }
                        <Menu.Divider></Menu.Divider>
                        <Menu to="/projects/all">View All Project</Menu>
                        <Menu to="" onClick={showCreateProject}>Create Project</Menu>
                    </MenuGroup>
                </HNavItem>
            </nav>
            <div>
                Profile Menu
            </div>
        </header>
    )
}

export default withRouter(Header);