import { connect } from 'react-redux';
import { createNewFeedItem } from '../../actions/posts_actions';
import NewFeedItem from './new_feed_item';
import { receivePost } from '../../actions/posts_actions'

const mapStateToProps = state => ({
    currentUserId: state.session.currentUserId
});
const mapDispatchToProps = dispatch => ({
    createNewFeedItem: formData => createNewFeedItem(formData),
    action: post => dispatch(receivePost(post))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedItem);