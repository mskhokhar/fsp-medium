import { connect } from 'react-redux';
import FeedItem from './feed_item';
import { fetchCUserLikes} from '../../actions/like_actions';
import { fetchPosts, fetchPost, deletePost } from '../../actions/posts_actions'
import { likePost, unlikePost } from '../../actions/like_actions';
import { extractPosts } from '../../reducers/selector';


const mapStateToProps = (state, ownParams) => {
    const posts = extractPosts(state.entities)
    return(
        {
            likes: state.entities.likes,
            currentUserId: state.session.currentUserId,
            post: posts[ownParams.match.params.postId],
            users: state.entities.users,
            loading: state.ui.loading.detailLoading
        }
    );
};
const mapDispatchToProps = dispatch => ({
    likePost: like => dispatch(likePost(like)),
    unlikePost: likeId => dispatch(unlikePost(likeId)),
    fetchCUserLikes: () => dispatch(fetchCUserLikes()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);