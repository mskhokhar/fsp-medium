import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import likesReducer from './likes_reducer';
import popularPostsReducer from './popular_posts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    popularPosts: popularPostsReducer,
    likes: likesReducer
});

export default entitiesReducer;