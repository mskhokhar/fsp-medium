import { connect } from 'react-redux';
import Footer from './footer';

import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    loading_index: state.ui.loading.indexLoading,
    loading_detail: state.ui.loading.detailLoading

});
const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);