import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {login, logout} from './actions/session_actions';
import {postUser} from './utils/session_api_util';
import { fetchPosts } from './actions/posts_actions'



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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.postUser = postUser;
    window.fetchPosts = fetchPosts;

    ReactDOM.render(< Root store={store}/>, root);
});