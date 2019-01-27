import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import EditCreature from './edit_creature';
import DisplayCreature from './display_creature';

export default class Creature extends React.Component {
  static propTypes = {
    creature: PropTypes.shape({
      initiative: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    updateCreature: PropTypes.func.isRequired,
    deleteCreature: PropTypes.func.isRequired,
  };

  static styles = {
    container: {
      backgroundColor: 'white',
      margin: '3px 0px',
      padding: '5px',
      border: '2px solid #C53131', // Team color?
    },
    initiative: {
      width: '40px',
    }
  }

  constructor() {
    super();
    this.state = {
      isEditing: false,
      hpMod: 1,
    };
  }

  updateInitiative = e => {
    this.props.updateCreature(this.props.creature.id, 'initiative', _.toInteger(e.target.value));
  }

  updateName = e => {
    this.props.updateCreature(this.props.creature.id, 'name', e.target.value);
  }

  updateTotalHp = e => {
    const { updateCreature, creature } = this.props;
    updateCreature(creature.id, 'hpTotal', _.toInteger(e.target.value));
  }

  updateHealthMod = e => {
    this.setState({ hpMod: _.toInteger(e.target.value) });
  }

  damageHP = () => {
    const { updateCreature, creature } = this.props;
    const newHp = _.max([creature.hp - this.state.hpMod, 0]);
    updateCreature(creature.id, 'hp', newHp);
    // this.setState({ hpMod: 0 }); // NOTE: Do we want to reset this value
  }

  healHP = () => {
    const { updateCreature, creature } = this.props;
    const newHp = _.min([creature.hp + this.state.hpMod, creature.hpTotal]);
    updateCreature(creature.id, 'hp', newHp);
    // this.setState({ hpMod: 0 }); // NOTE: Do we want to reset this value
  }

  editCreature = () => {
    this.setState({ isEditing: true });
  }

  doneEditing = () => {
    this.setState({ isEditing: false });
  }

  deleteCreature = () => {
    const { deleteCreature, creature } = this.props;
    deleteCreature(creature.id);
  }

  render() {
    const { creature } = this.props;
    // const { ac, concentrating, condition, hp, hpTotal, initiative, name, team, url } = creature;
    const { hp, hpTotal, initiative, name } = creature;

    if (this.state.isEditing) {
      return (
        <EditCreature
          doneEditing={this.doneEditing}
          hpTotal={hpTotal}
          initiative={initiative}
          name={name}
          updateInitiative={this.updateInitiative}
          updateName={this.updateName}
          updateTotalHp={this.updateTotalHp}
          deleteCreature={this.deleteCreature}
        />
      );
    }

    return (
      <DisplayCreature
        damageHP={this.damageHP}
        edit={this.editCreature}
        healHP={this.healHP}
        hp={hp}
        hpMod={this.state.hpMod}
        hpTotal={hpTotal}
        initiative={initiative}
        name={name}
        updateHealthMod={this.updateHealthMod}
      />
    );
  }
}
