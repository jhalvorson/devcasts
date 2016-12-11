import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import App from './App'

function mapStateToProps(state) {
    return {
        podcasts: state.podcasts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dispatch);
}

const State = connect(mapStateToProps)(App)

export default State
