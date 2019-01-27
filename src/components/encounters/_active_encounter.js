import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EncounterGroup from './encounter_group';
import * as encounterActions from '../../actions/encounter';

function mapStateToProps(state) {
  return {
    creatures: _.orderBy(_.map(state.activeEncounter.creatureIds, id => state.creatures[id]), 'initiative', 'desc'), // TODO: selectors
  };
}

const mapActionsToProps = {
  newCreature: encounterActions.addNewCreatureToEncounter,
  updateCreature: encounterActions.updateCreature,
  deleteCreature: encounterActions.deleteCreature,
};

export class ActiveEncounter extends React.Component {
  static propTypes = {
    newCreature: PropTypes.func.isRequired,
    creatures: PropTypes.arrayOf(PropTypes.shape({}).isRequired,).isRequired,
    updateCreature: PropTypes.func.isRequired,
    deleteCreature: PropTypes.func.isRequired,
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
    const { creatures, updateCreature, deleteCreature } = this.props;

    return (
      <div>
        <EncounterGroup
          title="Active Encounter"
          add={this.addNewCreature}
          creatures={creatures}
          updateCreature={updateCreature}
          deleteCreature={deleteCreature}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ActiveEncounter);
