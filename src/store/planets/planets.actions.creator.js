import { searchPlanets } from './planets.actions';

const fetchUrl = "https://swapi.co/api/planets/";
export const searchPlanetsFetch = (param) => {
  return (dispatch) => {
    dispatch({ type: searchPlanets.REQUEST })
    return fetch(`${fetchUrl}?${param}`)
      .then((response) => {
        response.json().then((res) => dispatch({
          type: searchPlanets.SUCCESS,
          payload: { response: res, isSearch: param.indexOf('search') >= 0 }
        })
        )
      }).catch((err) => {
        console.log(err)
        dispatch({ type: searchPlanets.ERROR })
      })
  }
}

export const resetCalls = () => {
  return {
    type: 'RESET'
  }
}