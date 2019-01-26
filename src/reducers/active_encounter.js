import _ from 'lodash';
import { actionTypes as encounterActions } from '../actions/encounter';

const initialState = {
  creatureIds: [],
  currentTurn: null,
};

export default function activeEncounter(state = initialState, action) {
  switch (action.type) {
  case encounterActions.LOAD_DATA: {
    return action.payload.activeEncounter;
  }

  case encounterActions.ADD_CREATURE: {
    const { groupId, newCreatureId } = action.payload;
    if (groupId === 'active') {
      const newState = {
        ...state,
        creatureIds: _.concat(state.creatureIds, newCreatureId),
      };
      chrome.storage.sync.set({ activeEncounter: newState });
      return newState;
    }
    return state;
  }

  default:
    return state;
  }
}
