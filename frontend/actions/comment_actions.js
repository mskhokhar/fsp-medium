import {
    postComment,
    getComments,
    removeComment
} from '../utils/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const START_RECEIVING_POST = 'START_RECEIVING_POST';


const receiveAllComments = payload => ({
    type: RECEIVE_ALL_COMMENTS,
    payload
})

const receiveComment = payload => ({
    type: RECEIVE_COMMENT,
    payload
})
const removeTheComment = payload => ({
    type: DELETE_COMMENT,
    payload
})

export const startReceivingPost = () => {
    return {
        type: START_RECEIVING_POST
    };
};

export const addComment = comment => dispatch => {
    dispatch(startReceivingPost());
    return postComment(comment)
        .then(comment => {
            dispatch(receiveComment(comment));
        })
}

export const fetchAllComments = () => dispatch => getComments()
    .then(comments => {
        dispatch(receiveAllComments(comments))
    })
export const deleteComment = commentId => dispatch => {
    dispatch(startReceivingPost());
    return removeComment(commentId)
        .then(payload => {
            dispatch(removeTheComment(payload))
        })
}