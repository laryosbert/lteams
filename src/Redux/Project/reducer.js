import { RECEIVE_PROJECT, CREATE_PROJECT_START, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR } from './actionTypes';

const initialState = {
    projects: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PROJECT: {
            const { projects } = action;
            return {
                ...state,
                projects
            };
        }
        case CREATE_PROJECT_START: {
            return {
                ...state,
                loading: true
            }
        }
        case CREATE_PROJECT_SUCCESS: {
            return {
                ...state,
                projects: [...state.projects, ...action.projects],
                loading: false
            }
        }
        case CREATE_PROJECT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };

        }
        default:
            return state;
    }
}
