import { CHANGE_THEME } from "./actionTypes";

const initialState = {
    themePrefix: 'lt'    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME: {
            const { customizeTheme } = action.payload;
            return {
                ...state,
                themePrefix: customizeTheme
            };
        }
        default:
            return state;
    }
}
