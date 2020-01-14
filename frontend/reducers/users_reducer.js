import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS } from '../actions/posts_actions'
import { DELETE_LIKE, RECEIVE_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_ALL_POSTS:
            nextState = Object.assign(nextState, action.payload.users);
            return nextState;
        case DELETE_LIKE:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case RECEIVE_LIKE:
            nextState[action.payload.id] = action.payload;
            return nextState;
        default:
            return state;
    }
}