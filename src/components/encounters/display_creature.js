import React from 'react';
import PropTypes from 'prop-types';
import HpBar from './hpBar';

export default function displayCreature(props) {
  const { initiative, name, hp, hpTotal, damageHP, hpMod, updateHealthMod, healHP, edit } = props;

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
}

displayCreature.propTypes = {
  initiative: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  hpTotal: PropTypes.number.isRequired,
  damageHP: PropTypes.func.isRequired,
  hpMod: PropTypes.number.isRequired,
  updateHealthMod: PropTypes.func.isRequired,
  healHP: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};
