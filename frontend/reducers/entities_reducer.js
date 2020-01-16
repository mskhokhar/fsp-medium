import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import likesReducer from './likes_reducer';
import popularPostsReducer from './popular_posts_reducer';
import editorPicksReducer from './editor_picks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    popularPosts: popularPostsReducer,
    likes: likesReducer,
    editorPicks: editorPicksReducer
});

export default entitiesReducer;