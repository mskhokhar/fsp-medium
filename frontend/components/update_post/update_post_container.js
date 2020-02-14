import { connect } from "react-redux";
import { updatePost, fetchPost } from "../../actions/posts_actions";
import { extractPosts } from '../../reducers/selector';
import UpdatePost from "./update_post";
import {
  receivePost
} from "../../actions/posts_actions";

const mapStateToProps = (state, ownParams) => {
    const posts = extractPosts(state.entities);
    return {
        currentUserId: state.session.currentUserId,
        post: posts[ownParams.match.params.postId]
    };
};
const mapDispatchToProps = dispatch => ({
  updatePost: (formData, postId) => updatePost(formData, postId),
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(receivePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
