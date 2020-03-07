import {
    RECEIVE_ALL_POSTS,
    START_RECEIVING_ALL_POSTS,
    RECEIVE_POST,
    START_RECEIVING_POST
} from '../actions/posts_actions';

const initialState = {
    indexLoading: false,
    detailLoading: false
};

export default function loadingReducer(state = initialState, action){
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, { indexLoading: false });
        case START_RECEIVING_ALL_POSTS:
            return Object.assign({}, state, { indexLoading: true });
        case RECEIVE_POST:
            return Object.assign({}, state, { indexLoading: false });
        case START_RECEIVING_POST:
            return Object.assign({}, state, { indexLoading: true });
        default:
            return state;
    }
};


