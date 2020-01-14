import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts, fetchPost } from '../../actions/posts_actions'

const mapStateToProps = state => ({
    posts: state.entities.posts,
    // likedPosts: state.entities.users[state.session.currentUserId].liked_posts,
    currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);