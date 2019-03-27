import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as encounterActions from '../actions/encounter';
import DieRoller from './die_roller/_die_roller';
import ActiveEncounter from './encounters/_active_encounter';


const mapStateToProps = () => ({});

const mapActionsToProps = {
  loadData: encounterActions.loadData,
};

export class App extends Component {
  static propTypes = {
    loadData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.loadData();
    this.injectCss();
  }

  loadData = () => {
    const storedReducers = ['creatures', 'activeEncounter'];
    chrome.storage.sync.get(storedReducers, result => {
      this.props.loadData(result);
    });
  }

  injectCss = () => {
    const cssfiles = ['rc-slider.css'];
    _.forEach(cssfiles, file => {
      let link = document.createElement('link');
      link.href = `chrome-extension://hokakbhjpbdbhfpcgffjohmcdoebbcjp/${file}`;
      link.type = 'text/css';
      link.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(link);
    });
  }

  render() {
    return (
      <div className='App' style={{ backgroundColor: '#26282a', height: '100vh' }}>
        <header className='App-header'>
          <h3 className='banner-text' style={{ backgroundColor: '#C53131', textAlign: 'center' }} >Enhance Beyond</h3>
        </header>
        <DieRoller />
        <ActiveEncounter />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
