import { RECEIVE_C_USER_LIKES, RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';
export default (state ={}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_C_USER_LIKES:
            return Object.assign({}, action.payload.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, action.payload.likes);
        case DELETE_LIKE:
            return Object.assign({}, action.payload.likes);
        default:
            return state;
    }
}