import _ from 'lodash';
import { actionTypes as encounterActions } from '../actions/encounter';

const initialState = {
  creatureIds: [],
  currentTurn: 0,
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

  case encounterActions.DELETE_CREATURE: {
    if (_.includes(state.creatureIds, action.payload)) {
      const newState = { ...state, creatureIds: _.filter(state.creatureIds, id => id !== action.payload) };
      chrome.storage.sync.set({ activeEncounter: newState });
      return newState;
    }
    return state;
  }

  case encounterActions.NEXT_CREATURE: {
    let placeInOrder = state.currentTurn + 1;
    if (placeInOrder >= _.size(state.creatureIds)) {
      placeInOrder = 0;
    }
    const newState = { ...state, currentTurn: placeInOrder };
    chrome.storage.sync.set({ activeEncounter: newState });
    return newState;
  }

  case encounterActions.PREV_CREATURE: {
    let placeInOrder = state.currentTurn - 1;
    if (placeInOrder <= 0) {
      placeInOrder = _.size(state.creatureIds);
    }
    const newState = { ...state, currentTurn: placeInOrder };
    chrome.storage.sync.set({ activeEncounter: newState });
    return newState;
  }

  default:
    return state;
  }
}
