
import { RECEIVE_ALL_POSTS, RECEIVE_POST, DELETE_LIKE } from '../actions/posts_actions';
export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, action.payload.posts);
        case RECEIVE_POST:
            // debugger;
            return Object.assign(nextState,{[action.post.id]: action.post})
        default:
            return state;
    }
}