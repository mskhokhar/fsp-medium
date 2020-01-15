import { connect } from 'react-redux';
import { createNewFeedItem } from '../../actions/posts_actions';
import NewFeedItem from './new_feed_item';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    
});
const mapDispatchToProps = dispatch => ({
    createNewFeedItem: newFeedItemForm => dispatch(login(newFeedItemForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedItem);