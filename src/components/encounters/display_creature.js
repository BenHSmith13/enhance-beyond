import React from 'react';
import PropTypes from 'prop-types';
import HpBar from './hpBar';

export default function displayCreature(props) {
  const { initiative, name, hp, hpTotal, damageHP, hpMod, updateHealthMod, healHP, edit, isActive } = props;

  const styles = {
    container: {
      backgroundColor: 'white',
      margin: '3px',
      padding: '5px',
      border: '2px solid #C53131', // Team color?
      color: 'black',
    },
    active: {
      backgroundColor: 'purple',
      color: 'white',
      padding: '5px 0px',
    },
    initiative: {
      width: '40px',
    }
  };

  const creature = (
    <div style={styles.container}>
      Init: {initiative}
      <h4>{name}</h4>
      <HpBar
        hp={hp}
        total={hpTotal}
      />
      <button onClick={damageHP}>Damage</button>
      <input
        type='number'
        value={hpMod}
        onChange={updateHealthMod}
        style={styles.initiative}
        min='1'
      />
      <button onClick={healHP}>Heal</button>
      <button onClick={edit}>Edit</button>
    </div>
  );

  if (isActive) {
    return (
      <div style={styles.active}>
        <span style={styles.activeText}>Current Turn:</span>
        {creature}
      </div>
    );
  }

  return creature;
}

displayCreature.propTypes = {
  damageHP: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  healHP: PropTypes.func.isRequired,
  hp: PropTypes.number.isRequired,
  hpMod: PropTypes.number.isRequired,
  hpTotal: PropTypes.number.isRequired,
  initiative: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  updateHealthMod: PropTypes.func.isRequired,
};
