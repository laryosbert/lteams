import {
    RECEIVE_PROJECT,
    SHOW_CREATE_MODAL,
    HIDE_CREATE_MODAL,
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_ERROR
} from './actionTypes';

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
        case SHOW_CREATE_MODAL:
            {
                return {
                    ...state,
                    showModal: true
                };
            }
        case HIDE_CREATE_MODAL:
            {
                return {
                    ...state,
                    showModal: false
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
                loading: false,
                showModal: false
            }
        }
        case CREATE_PROJECT_ERROR: {
            return {
                ...state,
                loading: false,
                showModal: false,
                error: action.error
            };

        }
        default:
            return state;
    }
}
