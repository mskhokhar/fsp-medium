
import {
    postLike,
    removeLike,
    getLikes
} from '../utils/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';
export const RECEIVE_C_USER_LIKES = "RECEIVE_C_USER_LIKES";

const receiveLike = payload => ({
    type: RECEIVE_LIKE,
    payload
})

const deleteLike = payload => ({
    type: DELETE_LIKE,
    payload
})

const receiveCUserLike = payload => ({
    type: RECEIVE_C_USER_LIKES,
    payload
})

export const likePost = like => dispatch => postLike(like)
    .then( like => dispatch(receiveLike(like)) )

export const unlikePost = likeId => dispatch => removeLike(likeId)
    .then(likedPosts => dispatch(deleteLike(likedPosts)) )

export const fetchCUserLikes = () => dispatch => getLikes()
    .then(likedPosts => dispatch(receiveCUserLike(likedPosts)))