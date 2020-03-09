import { connect } from "react-redux";
import { updatePost,fetchPosts } from "../../actions/posts_actions";
import UpdatePost from "./update_post";
import {
  receivePost
} from "../../actions/posts_actions";

const mapStateToProps = (state, ownParams) => {
    return {
        currentUserId: state.session.currentUserId,
        post: state.entities.posts[ownParams.match.params.postId],
        loading: state.ui.loading.indexLoading

    };
};
const mapDispatchToProps = dispatch => ({
  updatePost: (formData, postId) => updatePost(formData, postId),
  fetchPosts: () => dispatch(fetchPosts()),
  action: post => dispatch(receivePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
