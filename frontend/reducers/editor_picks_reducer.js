import { RECEIVE_ALL_POSTS} from '../actions/posts_actions';
export default (state = {}, action) => {
    let nextState = Object.assign({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, action.payload.editorPicks);
        default:
            return state;
    }
}