import { combineReducers } from 'redux';
import activeEncounter from './active_encounter';
import creatures from './creatures';

const reducers = combineReducers({
  activeEncounter,
  creatures,
});

export default reducers;
