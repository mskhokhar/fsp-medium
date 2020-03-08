import {
    retrieveAllPosts,
    retrievePost,
    createPost,
    removePost,
    editPost
} from '../utils/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_LIKE = "DELETE_LIKE";
export const DESTROY_POST = "DESTROY_POST";
export const RECEIVE_CREATE_POST_ERRORS = 'RECEIVE_CREATE_POST_ERRORS';
export const START_RECEIVING_ALL_POSTS = 'START_RECEIVING_ALL_POSTS';
export const START_RECEIVING_POST = 'START_RECEIVING_POST';

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

export const startReceivinAllPost = () => {
    return{
        type: START_RECEIVING_ALL_POSTS
    };
};
export const startReceivingPost = () => {
    return{
        type: START_RECEIVING_POST
    };
};

const destroyPost = postId => ({
    type: DESTROY_POST,
    postId
})


export const receiveCreatePostErrors = errors => ({
    type: RECEIVE_CREATE_POST_ERRORS,
    errors
});

export const fetchPosts = () => dispatch => {
    dispatch(startReceivinAllPost());
    return retrieveAllPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
};

export const fetchPost = postId => dispatch => {
    dispatch(startReceivingPost());
    return retrievePost(postId)
        .then(post => dispatch(receivePost(post)))
};

export const createNewFeedItem = post  => createPost(post);

export const deletePost = postId => dispatch => removePost(postId)
    .then( () => {
        dispatch(destroyPost(postId))
    } );

export const updatePost = (formData, postId) => editPost(formData,postId);
        

