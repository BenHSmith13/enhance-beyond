import _ from 'lodash';
import { actionTypes as encounterActions } from '../actions/encounter';

const initialState = {};

const newCreature = {
  ac: 5,
  concentrating: false,
  condition: null,
  hp: 10,
  hpTotal: 10,
  initiative: 0,
  name: 'Basic Slime',
  team: 1,
  url: '',
};

export default function creatures(state = initialState, action) {
  switch (action.type) {
  case encounterActions.LOAD_DATA: {
    return action.payload.creatures;
  }

  case encounterActions.ADD_CREATURE: {
    const newState = _.cloneDeep(state);
    const { newCreatureId } = action.payload;
    newState[newCreatureId] = {
      ...newCreature,
      id: newCreatureId,
    };
    chrome.storage.sync.set({ creatures: newState });
    return newState;
  }

  case encounterActions.UPDATE_CREATURE: {
    const { creatureId, attribute, value } = action.payload;
    if (creatureId && attribute) {
      const newState = _.cloneDeep(state);
      newState[creatureId][attribute] = value;
      chrome.storage.sync.set({ creatures: newState });
      return newState;
    }
    return state;
  }

  case encounterActions.DELETE_CREATURE: {
    const newState = _.cloneDeep(state);
    delete newState[action.payload];
    chrome.storage.sync.set({ creatures: newState });
    return newState;
  }

  default:
    return state;
  }
}
