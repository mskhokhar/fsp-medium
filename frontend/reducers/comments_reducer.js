import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, action.payload);
        case RECEIVE_COMMENT:
            return Object.assign(nextState, { [action.payload.comment.id]: action.payload.comment });
        case DELETE_COMMENT:
            delete nextState[action.payload.comment.id]
            return nextState;
        default:
            return state;
    }
}