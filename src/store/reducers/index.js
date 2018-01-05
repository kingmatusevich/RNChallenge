import {
  combineReducers
} from 'redux';
import authentication from './authentication';
import navigation from './navigation';

export default combineReducers({
  navigation,
  authentication
});
