import React from 'react';
import PropTypes from 'prop-types';

export default function hpBar(props) {
  const { hp, total } = props;
  const progress = hp / total;
  const barWidth = 150;

  let barColor = 'green';
  if (progress * 100 < 30) {
    barColor = 'orange';
  }
  if (progress * 100 < 15) {
    barColor = 'red';
  }

  const styles = {
    bar: {
      width: `${barWidth}px`,
      height: '20px',
      border: '1px solid black',
      backgroundColor: 'lightgrey',
      position: 'relative',
    },
    progress: {
      width: `${(barWidth * progress) - 2}px`,
      display: hp ? 'block' : 'none',
      height: '18px',
      backgroundColor: barColor,
    },
    text: {
      position: 'relative',
      top: hp ? '-17px' : '1px',
      width: `${barWidth}px`,
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.bar}>
      <div style={styles.progress} />
      <div style={styles.text}>{hp} / {total}</div>
    </div>
  );
}

hpBar.propTypes = {
  hp: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
