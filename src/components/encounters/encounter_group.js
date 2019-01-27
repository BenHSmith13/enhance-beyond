import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Creature from './creature';

export default class EncounterGroup extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired,
    creatures: PropTypes.arrayOf(PropTypes.shape).isRequired,
    updateCreature: PropTypes.func.isRequired,
    deleteCreature: PropTypes.func.isRequired,
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
    const { title, add, creatures, updateCreature, deleteCreature } = this.props;
    const styles = EncounterGroup.styles;

    return (
      <div>
        <h4 style={styles.title}>{title || 'Encounter Group'}</h4>
        <button onClick={add}>Plus</button>
        {_.map(creatures, c => <Creature
          key={c.id}
          creature={c}
          updateCreature={updateCreature}
          deleteCreature={deleteCreature}
        />)}
      </div>
    );
  }
}
