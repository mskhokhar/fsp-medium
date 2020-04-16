import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import likesReducer from './likes_reducer';
import followReducer from './followers_reducer';
import popularPostsReducer from './popular_posts_reducer';
import editorPicksReducer from './editor_picks_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    followers: followReducer,
    posts: postsReducer,
    popularPosts: popularPostsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    editorPicks: editorPicksReducer
});

export default entitiesReducer;