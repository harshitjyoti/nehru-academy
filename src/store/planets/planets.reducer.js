import { searchPlanets } from './planets.actions';
const INITIAL_STATE = {
  planets: null,
  isProcessing: false,
  hasError: false,
  isPlanetFetched: false,
  callsRemaining: 15,
}

const profileReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        callsRemaining: 15
      }
    case searchPlanets.REQUEST:
      return {
        ...state,
        isProcessing: true
      }
    case searchPlanets.SUCCESS:
      return {
        ...state,
        planets: action.payload.response,
        isProcessing: false,
        isPlanetFetched: true,
        callsRemaining: action.payload.isSearch ? state.callsRemaining - 1 : state.callsRemaining
      }
    case searchPlanets.ERROR:
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