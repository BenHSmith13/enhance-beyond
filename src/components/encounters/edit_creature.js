import React from 'react';
import PropTypes from 'prop-types';

export default function editCreature(props) {
  const { initiative, hpTotal, name, updateInitiative, updateName, updateTotalHp, doneEditing, deleteCreature } = props;

  const styles = {
    container: {
      backgroundColor: 'white',
      margin: '3px 0px',
      padding: '5px',
      border: '2px solid #C53131', // Team color?
    },
    initiative: {
      width: '40px',
    }
  };

  return (
    <div style={styles.container}>
      Init:
      <input
        style={styles.initiative}
        type='number'
        value={initiative}
        onChange={updateInitiative}
        min='0'
      />
      <input type='text' value={name} onChange={updateName}/>
      TotalHp:
      <input
        type='number'
        value={hpTotal}
        onChange={updateTotalHp}
        style={styles.initiative}
        min='1'
      />
      <button onClick={deleteCreature}>Delete</button>
      <button onClick={doneEditing}>Done</button>
    </div>
  );
}

editCreature.propTypes = {
  initiative: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  hpTotal: PropTypes.number.isRequired,
  updateInitiative: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  updateTotalHp: PropTypes.func.isRequired,
  doneEditing: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  deleteCreature: PropTypes.func.isRequired,
};
