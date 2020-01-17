import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPost, fetchPosts } from '../../actions/posts_actions'

const mapStateToProps = (state, ownParams) => {
    let owner = state.entities.users[ownParams.match.params.userId];
    let allPosts = Object.values(state.entities.posts);
    return {
    profileOwner: owner,
    currentUserId: state.session.currentUserId,
    posts: allPosts.filter(post => post.author_id === owner.id),
    users: state.entities.users
}};
const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);