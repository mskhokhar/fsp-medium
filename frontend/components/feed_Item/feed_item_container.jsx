import { connect } from 'react-redux';
import FeedItem from './feed_item';
import { fetchCUserLikes} from '../../actions/like_actions';
import { fetchPosts, fetchPost, deletePost } from '../../actions/posts_actions'
import { likePost, unlikePost } from '../../actions/like_actions';
import { addComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownParams) => {
    return(
        {
            likes: state.entities.likes,
            currentUserId: state.session.currentUserId,
            post: state.entities.posts[ownParams.match.params.postId],
            users: state.entities.users,
            loading: state.ui.loading.indexLoading,
            postCommentIds: state.entities.posts[ownParams.match.params.postId].post_comments,
            comments: state.entities.comments
        }
    );
};
const mapDispatchToProps = dispatch => ({
    likePost: like => dispatch(likePost(like)),
    unlikePost: likeId => dispatch(unlikePost(likeId)),
    fetchCUserLikes: () => dispatch(fetchCUserLikes()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    addComment: comment => dispatch(addComment(comment))

});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);