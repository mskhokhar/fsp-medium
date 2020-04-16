import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {login, logout} from './actions/session_actions';
import {postUser} from './utils/session_api_util';
import { fetchPosts } from './actions/posts_actions'
import { followUser, unfollow, fetchAllFollowers } from './actions/follow_actions';
import { addComment, fetchAllComments} from './actions/comment_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                posts: {}
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.login = login;
    window.logout = logout;
    window.getState = store.store.getState;
    window.dispatch = store.store.dispatch;
    window.postUser = postUser;
    window.fetchPosts = fetchPosts;
    window.followUser = followUser;
    window.unfollow = unfollow;
    window.fetchAllFollowers = fetchAllFollowers;
    window.addComment = addComment;
    window.fetchAllComments = fetchAllComments;

    ReactDOM.render(< Root store={store.store} persistor={store.persistor}/>, root);
});