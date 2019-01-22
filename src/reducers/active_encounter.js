import _ from 'lodash';
import { actionTypes as encounterActions } from '../actions/encounter';

const initialState = {
  creatureIds: [],
  currentTurn: null,
}

export default function activeEncounter(state = initialState, action) {
  switch (action.type) {
    case encounterActions.ADD_CREATURE: {
      const { groupId, newCreatureId } = action.payload;
      if (groupId === 'active') {
        return {
          ...state,
          creatureIds: _.concat(state.creatureIds, newCreatureId),
        }
      }
      return state;
    }

    default:
      return state;
  }
}
