import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// function mapStateToProps(state) {
//   return {
//     listings: state.listings,
//     comments: state.comments,
//     user: state.user
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;
