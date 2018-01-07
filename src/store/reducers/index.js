import {
  combineReducers
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const config = {
  key: 'authentication',
  storage,
  blacklist: ['loading', 'error']
}
import authentication from './authentication';
import navigation from './navigation';
import drawer from './drawer';
import api from './apis';
export default combineReducers({
  navigation,
  authentication: persistReducer(config,authentication),
  drawer,
  api
});
