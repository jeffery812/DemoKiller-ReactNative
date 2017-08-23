import { initialState } from '../Store'

function fuck(state = initialState, action) {
    console.log("action type: ", action.type);
    switch (action.type) {
        case 'ADD_ONE':
            return {defaultNum: state.defaultNum + 1};
        case 'DECREASE_ONE':
            return {defaultNum: state.defaultNum - 1};
        default:
            return state
    }
}

export default fuck;