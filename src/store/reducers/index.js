import {
  combineReducers
} from 'redux';
import authentication from './authentication';
import navigation from './navigation';
import drawer from './drawer';
import api from './apis';
export default combineReducers({
  navigation,
  authentication,
  drawer,
  api
});
