import React, { Component } from 'react';
import HumanAtributs from './HumanAtributs.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <HumanAtributs type='Žlutý' name='Petr' lastname='Černý' age='17' />
        <HumanAtributs type='Bílí' name='Pavel' lastname='Černý' age='27' />
        <HumanAtributs type='Černý' name='Petr' lastname='Bílí' age='18' />
      </div>
    );
  }
}
