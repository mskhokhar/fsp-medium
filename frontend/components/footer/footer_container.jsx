import { connect } from 'react-redux';
import Footer from './footer';

import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);