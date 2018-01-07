import {
  combineReducers
} from 'redux';
import authentication from './authentication';
import navigation from './navigation';
import drawer from './drawer';
export default combineReducers({
  navigation,
  authentication,
  drawer
});
