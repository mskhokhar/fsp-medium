import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}