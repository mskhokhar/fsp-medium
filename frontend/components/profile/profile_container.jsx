import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPost, fetchPosts } from '../../actions/posts_actions'
import { followUser, unfollow } from '../../actions/follow_actions'

const mapStateToProps = (state, ownParams) => {
    let owner = state.entities.users[ownParams.match.params.userId];
    let allPosts = Object.values(state.entities.posts);
    return {
    profileOwner: owner,
    currentUserId: state.session.currentUserId,
    posts: allPosts.filter(post => post.author_id === owner.id),
    users: state.entities.users,
    loading: state.ui.loading.indexLoading,
    followers: state.entities.followers
}};
const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchPosts: () => dispatch(fetchPosts()),
    followUser: follower => dispatch(followUser(follower)),
    unfollow: followId => dispatch(unfollow(followId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);