import { combineReducers } from 'redux';
import {
  ADD_CLIENT,
  EDIT_CLIENT,
  REMOVE_CLIENT,
  GET_CLIENTS,
} from './actions/actions.js';
  
function clients(state = [], action) {
  switch (action.type) {
    case GET_CLIENTS:
      return [...action.clients];
    case ADD_CLIENT:
      return state.push(action.client);
    case REMOVE_CLIENT:
      return [ ...state.filter( item => item[0] !== action.id)]
    default:
      return state
  }
}
 
const clientApp = combineReducers({
  clients
})
 
export default clientApp;