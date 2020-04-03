import profileReducer from './login/login.reducer';
import planetsReducer from './planets/planets.reducer';
import { combineReducers } from 'redux';

const combinedRducer = combineReducers({
  user: profileReducer,
  planets: planetsReducer,
});


export default combinedRducer;