import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts, fetchPost } from '../../actions/posts_actions'
import {categories} from '../../utils/category_state';

const mapStateToProps = state => ({
    posts: state.entities.posts,
    currentUserId: state.session.currentUserId,
    popularPosts: state.entities.popularPosts,
    users: state.entities.users,
    editorPicks: state.entities.editorPicks
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);