import _ from 'lodash';
import { actionTypes as encounterActions } from '../actions/encounter';

const initialState = {}

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
}

export default function creatures(state = initialState, action) {
  switch (action.type) {
    case encounterActions.ADD_CREATURE: {
      const newState = _.cloneDeep(state);
      const { newCreatureId } = action.payload;
      newState[newCreatureId] = {
        ...newCreature,
        id: newCreatureId,
      };
      return newState;
    }

    case encounterActions.UPDATE_CREATURE: {
      const { creatureId, attribute, value } = action.payload;
      if (creatureId && attribute) {
        const newState = _.cloneDeep(state);
        newState[creatureId][attribute] = value;
        return newState;
      }
      return state;
    }

    default:
      return state;
  }
}
