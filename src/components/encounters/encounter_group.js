import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Creature from './creature';

export default class EncounterGroup extends React.Component {
  static propTypes = {

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

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { title, add, creatures, updateCreature } = this.props;
    const styles = EncounterGroup.styles;

    return (
      <div>
        <h4 style={styles.title}>{title || 'Encounter Group'}</h4>
        <button onClick={add}>Plus</button>
        {_.map(creatures, c => <Creature
          key={c.id}
          creature={c}
          updateCreature={updateCreature}
        />)}
      </div>
    );
  }
}
