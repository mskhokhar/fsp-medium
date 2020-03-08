import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';
import { RECEIVE_CREATE_POST_ERRORS } from '../actions/posts_actions'
import {
    CLOSE_MODAL,
    OPEN_MODAL
} from '../actions/modal_actions';

const _nullErrors = [];
const sessionErrorsReducer= (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CREATE_POST_ERRORS:
            return null;
        case CLOSE_MODAL:
            return [];
        case OPEN_MODAL:
            return [];
        default:
            return state
    }
}
export default sessionErrorsReducer;
