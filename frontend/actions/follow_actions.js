
import {
    postFollower,
    removeFollower,
    getFollowers
} from '../utils/follower_api_util';

export const RECEIVE_ALL_FOLLOWERS = 'RECEIVE_ALL_FOLLOWERS';
export const DELETE_FOLLOWER = 'DELETE_FOLLOWER';
export const ADD_FOLLOWER = "ADD_FOLLOWER";

const receiveAllFollowers = payload => ({
    type: RECEIVE_ALL_FOLLOWERS,
    payload
})

const deleteFollower = payload => ({
    type: DELETE_FOLLOWER,
    payload
})

const addFollower = payload => ({
    type: ADD_FOLLOWER,
    payload
})

export const followUser = follower => dispatch => postFollower(follower)
    .then(payload => dispatch(addFollower(payload)))

export const unfollow = followId => dispatch => removeFollower(followId)
    .then(followers => dispatch(deleteFollower(followers)))

export const fetchAllFollowers = () => dispatch => getFollowers()
    .then(followers => dispatch(receiveAllFollowers(followers)))