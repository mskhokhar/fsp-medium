import { connect } from 'react-redux';
import Home from './home';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);