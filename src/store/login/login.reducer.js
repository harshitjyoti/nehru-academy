import { updateProfileDetails } from './login.actions';
import { superUser } from '../../constants';
const INITIAL_STATE = {
  userDetails: null,
  isProcessing: false,
  hasError: false,
  isSuperUser: false,
  isUserFetched: false
}

const profileReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'RESET_USER':
      return {
        ...state,
        isUserFetched: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isUserFetched: false,
        userDetails: null
      }
    case updateProfileDetails.REQUEST:
      return {
        ...state,
        isProcessing: true
      }
    case updateProfileDetails.SUCCESS:
      let user = null;
      const { response, userDetails: { password, user: name } } = action.payload
      if (response.count) {
        user = response.results.filter((user) =>
          (user.birth_year === password) && (user.name === name)
        )
        user = user.length === 1 ? user[0] : null;
      }
      return {
        ...state,
        userDetails: user,
        isSuperUser: user && user.name === superUser,
        isProcessing: false,
        isUserFetched: true
      }
    case updateProfileDetails.ERROR:
      return {
        ...state,
        isProcessing: false,
        hasError: true
      }
    default:
      return state
  }

}

export default profileReducer;