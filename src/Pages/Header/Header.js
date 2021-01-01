
import { useEffect } from 'react';
import { Route, withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuGroup } from '../../Components';
import { NewProject } from '../Project/NewProject';
import { initProject } from '../../Redux/Project/aciton';
import './Header.scss';

const Header = props => {
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(initProject());
        }, []
    );

    const projects = useSelector(state => {
        // console.log(state);
        return state.projects.projects;
    });

    // console.log(props.match.url)

    return (
        <header className="header-top">
            <nav>
                <Menu to="/MyWork">My Work</Menu>
                <MenuGroup title="Project">
                    <Menu to={props.match.url + "modal"}>Create Project</Menu>
                    <Route path={props.match.url + "modal"}><NewProject /></Route>
                    {
                        projects && projects.map(project => {
                            return <Menu to={`/project/${project.id}`}>{project.projectname}</Menu>
                        })
                    }
                    <Menu to="/UseStateTemp">UseStateTemp</Menu>
                </MenuGroup>
            </nav>
            <div>
                Profile Menu
            </div>
        </header>
    )
}

export default withRouter(Header);