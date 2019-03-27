import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Creature from './creature';
import InitiativeMover from './initiative_mover';

export default class EncounterGroup extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired,
    creatures: PropTypes.arrayOf(PropTypes.shape).isRequired,
    updateCreature: PropTypes.func.isRequired,
    deleteCreature: PropTypes.func.isRequired,
    active: PropTypes.bool,
    nextCreature: PropTypes.func,
    prevCreature: PropTypes.func,
  };

  static styles = {
    title: {
      color: 'white',
    }
  }

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { title, add, creatures, updateCreature, deleteCreature, active,
      nextCreature, prevCreature } = this.props;
    const styles = EncounterGroup.styles;

    return (
      <div>
        <h4 style={styles.title}>{title || 'Encounter Group'}</h4>
        <button onClick={add}>Plus</button>
        {active ? (
          <InitiativeMover
            next={nextCreature}
            prev={prevCreature}
          />
        ) : null}
        {_.map(creatures, (c, index) => <Creature
          key={c.id}
          isActive={active && index === 0}
          creature={c}
          updateCreature={updateCreature}
          deleteCreature={deleteCreature}
        />)}
      </div>
    );
  }
}
