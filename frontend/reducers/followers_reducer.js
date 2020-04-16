import { DELETE_FOLLOWER, RECEIVE_ALL_FOLLOWERS, ADD_FOLLOWER } from '../actions/follow_actions';
export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWERS:
            return Object.assign({}, action.payload.followers);
        case ADD_FOLLOWER:
            return Object.assign(nextState, { [action.follower.user_id]: action.follower});
        case DELETE_FOLLOWER:
            delete nextState[action.follower.user_id]
            return nextState;
        default:
            return state;
    }
}