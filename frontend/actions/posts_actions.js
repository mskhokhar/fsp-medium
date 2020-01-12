import {
    retrieveAllPosts,
    retrievePost
} from '../utils/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receiveAllPosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    };
};

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    };
};

export const fetchPosts = () => dispatch => retrieveAllPosts()
    .then( posts => dispatch(receiveAllPosts(posts)) );

export const fetchPost = post => dispatch => retrievePost(post)
    .then( post => dispatch(receivePost(post)) );