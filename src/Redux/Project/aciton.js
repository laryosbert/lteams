import axios from 'axios';
import {
    RECEIVE_PROJECT,
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL,
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_ERROR
} from './actionTypes';

export const getProjects = (projects) => ({
    type: RECEIVE_PROJECT,
    projects
});

export const initProject = () => dispatch => (
    axios.get('http://localhost:8021/projects')
        .then(results => {
            // console.log(results.data);
            dispatch(getProjects(results.data))
        })
);

export const showCreateModal = () => dispatch => {
    dispatch({ type: SHOW_CREATE_MODAL });
}

export const hideCreateModal = () => dispatch => {
    dispatch({ type: HIDE_CREATE_MODAL });
}

export const createProject = (projectname, history) => async dispatch => {
    dispatch({ type: CREATE_PROJECT_START });
    try {
        const results = await axios.post('http://localhost:8021/projects/add', {
            projectname: projectname
        });
        dispatch({
            type: CREATE_PROJECT_SUCCESS,
            projects: [{ id: results.data, projectname }]
        });
        history.push(`/project/${results.data}`);
    }
    catch (error) {
        dispatch({
            type: CREATE_PROJECT_ERROR,
            error
        });
        history.push(-1)
    }
};