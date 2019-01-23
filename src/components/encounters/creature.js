import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import HpBar from './hpBar';

export default class Creature extends React.Component {
  static propTypes = {
    creature: PropTypes.shape({
      initiative: PropTypes.number.isRequired,
    }).isRequired,
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

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

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

  render() {
    const { creature } = this.props;
    const styles = Creature.styles;
    const { ac, concentrating, condition, hp, hpTotal, initiative, name, team, url } = creature

    return (
      <div style={styles.container}>
        Init:
        <input
          style={styles.initiative}
          type='number'
          value={initiative}
          onChange={this.updateInitiative}
          min='0'
        />
        <input type='text' value={name} onChange={this.updateName}/>
        <HpBar
          hp={hp}
          total={hpTotal}
        />
        <input
          type='number'
          value={hpTotal}
          onChange={this.updateTotalHp}
          style={styles.initiative}
          min='1'
        />
        <button onClick={this.damageHP}>Damage</button>
        <input
          type='number'
          value={this.state.hpMod}
          onChange={this.updateHealthMod}
          style={styles.initiative}
          min='1'
        />
        <button onClick={this.healHP}>Heal</button>
      </div>
    );
  }
}
