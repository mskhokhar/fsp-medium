import {
    retrieveAllPosts,
    retrievePost,
    createPost,
    removePost
} from '../utils/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_LIKE = "DELETE_LIKE";
export const DESTROY_POST = "DESTROY_POST";
export const RECEIVE_CREATE_POST_ERRORS = 'RECEIVE_CREATE_POST_ERRORS';

const receiveAllPosts = payload => {
    return {
        type: RECEIVE_ALL_POSTS,
        payload
    };
};

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    };
};

const destroyPost = payload => ({
    type: DESTROY_POST,
    payload
})


export const receiveCreatePostErrors = errors => ({
    type: RECEIVE_CREATE_POST_ERRORS,
    errors
});

export const fetchPosts = () => dispatch => retrieveAllPosts()
    .then( posts => dispatch(receiveAllPosts(posts)) );

export const fetchPost = postId => dispatch => retrievePost(postId)
    .then( post => dispatch(receivePost(post)) );

export const createNewFeedItem = post  => createPost(post);

export const deletePost = postId => dispatch => removePost(postId)
    .then( post => dispatch(destroyPost(post)) )
        

