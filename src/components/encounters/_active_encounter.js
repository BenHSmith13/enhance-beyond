import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EncounterGroup from './encounter_group';
import * as encounterActions from '../../actions/encounter';

function mapStateToProps(state) {
  // TODO: selectors
  const orderedCreatures = _.orderBy(_.map(state.activeEncounter.creatureIds, id => state.creatures[id]), 'initiative', 'desc');
  // NOTE: there is a bug here at index 0
  const alreadyPast = _.slice(orderedCreatures, 0, state.activeEncounter.currentTurn);
  const yetToGo = _.slice(orderedCreatures, state.activeEncounter.currentTurn);
  return {
    creatures: _.concat(yetToGo, alreadyPast),
  };
}

const mapActionsToProps = {
  newCreature: encounterActions.addNewCreatureToEncounter,
  updateCreature: encounterActions.updateCreature,
  deleteCreature: encounterActions.deleteCreature,
  nextCreature: encounterActions.nextCreature,
  prevCreature: encounterActions.prevCreature,
};

export class ActiveEncounter extends React.Component {
  static propTypes = {
    newCreature: PropTypes.func.isRequired,
    creatures: PropTypes.arrayOf(PropTypes.shape({}).isRequired,).isRequired,
    updateCreature: PropTypes.func.isRequired,
    deleteCreature: PropTypes.func.isRequired,
    nextCreature: PropTypes.func.isRequired,
    prevCreature: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {

    };
  }

  addNewCreature = () => {
    this.props.newCreature('active');
  }

  render() {
    const { creatures, updateCreature, deleteCreature, nextCreature, prevCreature } = this.props;

    return (
      <EncounterGroup
        active
        next={nextCreature}
        prev={prevCreature}
        title="Active Encounter"
        add={this.addNewCreature}
        creatures={creatures}
        updateCreature={updateCreature}
        deleteCreature={deleteCreature}
        nextCreature={nextCreature}
        prevCreature={prevCreature}
      />
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ActiveEncounter);
