import React from 'react';
import PropTypes from 'prop-types';

export default function initiativeMover(props) {
  const { next, prev } = props;

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

initiativeMover.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};
