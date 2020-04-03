import { updateProfileDetails } from './login.actions';

const loginUrl = "https://swapi.co/api/people/?search={username}";
export const loginAction = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: updateProfileDetails.REQUEST })
    return fetch(loginUrl.replace('{username}', userDetails.user))
      .then((response) => {
        response.json().then((res) => dispatch({
          type: updateProfileDetails.SUCCESS,
          payload: { response: res, userDetails }
        })
        )
      }).catch((err) => {
        console.log(err)
        dispatch({ type: updateProfileDetails.ERROR })
      })
  }
}

export const setUser = () => ({ type: 'RESET_USER' });
export const logout = () => ({ type: 'LOGOUT' });