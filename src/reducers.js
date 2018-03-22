import { combineReducers } from 'redux';
import {
  ADD_CLIENT,
  EDIT_CLIENT,
  REMOVE_CLIENT,
} from './actions/actions.js';
  
function clients(state = [], action) {
  switch (action.type) {
    case ADD_CLIENT:
      return [
        ...state,
        {
          ...action.client
        }
      ]
    default:
      return state
  }
}
 
const clientApp = combineReducers({
  clients
})
 
export default clientApp;