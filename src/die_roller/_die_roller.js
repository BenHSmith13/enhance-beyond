import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class DieRoller extends React.Component {
  static propTypes = {

  };

  static styles = {
    inputs: {
      width: '45px',
    }
  }

  constructor() {
    super();
    this.state = {
      diceNum: 1,
      diceType: 20,
      output: 0,
    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  setDiceNum = e => {
    this.setState({ diceNum: e.target.value });
  }

  setDiceType = e => {
    this.setState({ diceType: e.target.value });
  }

  rollDice = () => {
    const { diceNum, diceType } = this.state;
    let output = 0;
    _.forEach(_.range(diceNum), () => {
      output += _.random(diceType);
    });
    this.setState({ output });
  }

  render() {
    const { } = this.props;
    const styles = DieRoller.styles;

    return (
      <div style={{ color: 'white' }}>
        <h4>Die Roller</h4>
        <div>
          <input style={styles.inputs} type='number' onChange={this.setDiceNum} value={this.state.diceNum} />
          D
          <input style={styles.inputs} type='number' onChange={this.setDiceType} value={this.state.diceType}/>
          <button onClick={this.rollDice}>Roll</button>
        </div>
        <div>{this.state.output || null}</div>
      </div>
    );
  }
}
