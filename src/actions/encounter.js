import _ from 'lodash';

export const actionTypes = {
  ADD_CREATURE: 'ADD_CREATURE',
  LOAD_DATA: 'LOAD_DATA',
  UPDATE_CREATURE: 'UPDATE_CREATURE',
};

export function loadData(storageData) {
  return {
    type: actionTypes.LOAD_DATA,
    payload: storageData,
  };
}

export function addNewCreatureToEncounter(groupId = 'active') {
  return {
    type: actionTypes.ADD_CREATURE,
    payload: {
      groupId,
      newCreatureId: _.uniqueId(), // TODO: replace this if I add a real backend
    },
  };
}

export function updateCreature(creatureId, attribute, value) {
  return {
    type: actionTypes.UPDATE_CREATURE,
    payload: {
      attribute,
      creatureId,
      value,
    },
  };
}
