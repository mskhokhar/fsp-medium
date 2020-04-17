
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

const deleteFollower = user_id => ({
    type: DELETE_FOLLOWER,
    user_id
})

const addFollower = follower => ({
    type: ADD_FOLLOWER,
    follower
})

export const followUser = follower => dispatch => postFollower(follower)
    .then(follower => dispatch(addFollower(follower)))

export const unfollow = followId => dispatch => removeFollower(followId)
    .then(follower => {
        dispatch(deleteFollower(follower.user_id));
    })

export const fetchAllFollowers = () => dispatch => getFollowers()
    .then(followers => {
        dispatch(receiveAllFollowers(followers))
    })