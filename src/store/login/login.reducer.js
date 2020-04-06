import { updateProfileDetails } from './login.actions';
import { superUser } from '../../constants';
const INITIAL_STATE = {
  gallery: null,
  isProcessing: false,
  classes: null,
  exercise: null,
  homework: null,
  result: null,
  notice: null,
  isSuperUser: false,
  isUserFetched: false
}

const profileReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SET_PROCESSING':
      return {
        ...state,
        isProcessing: action.payload
      }
    case 'GALLERY':
    case 'NOTICE':
    case 'CLASSES':
    case 'EXERCISE':
    case 'RESULT':
    case 'HOMEWORK':
      return {
        ...state,
        [action.type.toLowerCase()]: action.payload,
        isProcessing: false
      }
    default:
      return state
  }

}

export default profileReducer;