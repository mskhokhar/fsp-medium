import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts, fetchPost } from '../../actions/posts_actions'

const mapStateToProps = state => ({
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: post => dispatch(fetchPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);