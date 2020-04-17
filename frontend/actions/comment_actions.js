import {
    postComment,
    getComments
} from '../utils/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveAllComments = payload => ({
    type: RECEIVE_ALL_COMMENTS,
    payload
})

const receiveComment = payload => ({
    type: RECEIVE_COMMENT,
    payload
})

export const addComment = comment => dispatch => postComment(comment)
    .then(comment => {
        dispatch(receiveComment(comment));
    })

export const fetchAllComments = () => dispatch => getComments()
    .then(comments => {
        dispatch(receiveAllComments(comments))
    })