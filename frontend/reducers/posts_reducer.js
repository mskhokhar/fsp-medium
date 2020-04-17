
import { RECEIVE_ALL_POSTS, RECEIVE_POST, DESTROY_POST } from '../actions/posts_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT} from '../actions/comment_actions';
export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, action.payload.posts);
        case RECEIVE_POST:
            return Object.assign(nextState,{[action.post.id]: action.post});
        case DELETE_COMMENT:
            return Object.assign(nextState, { [action.payload.post.id]: action.payload.post });
        case DESTROY_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}