import uuid from '../utils/uuid';

export const actionTypes = {
  ADD_CREATURE: 'ADD_CREATURE',
  LOAD_DATA: 'LOAD_DATA',
  UPDATE_CREATURE: 'UPDATE_CREATURE',
  DELETE_CREATURE: 'DELETE_CREATURE',
  NEXT_CREATURE: 'NEXT_CREATURE',
  PREV_CREATURE: 'PREV_CREATURE',
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
      newCreatureId: uuid(), // TODO: replace this if I add a real backend
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

export function deleteCreature(creatureId) {
  return {
    type: actionTypes.DELETE_CREATURE,
    payload: creatureId,
  };
}

export function nextCreature() {
  return {
    type: actionTypes.NEXT_CREATURE,
  };
}

export function prevCreature() {
  return {
    type: actionTypes.PREV_CREATURE,
  };
}
