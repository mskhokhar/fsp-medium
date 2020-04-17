import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts, fetchPost } from '../../actions/posts_actions'
import { fetchAllFollowers } from '../../actions/follow_actions'

const mapStateToProps = state => ({
    posts: state.entities.posts,
    currentUserId: state.session.currentUserId,
    popularPosts: state.entities.popularPosts,
    users: state.entities.users,
    editorPicks: state.entities.editorPicks,
    loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchAllFollowers: () => dispatch(fetchAllFollowers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);