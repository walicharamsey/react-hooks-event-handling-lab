// components/Keypad.js
import React from 'react';

class Keypad extends React.Component {
  handleInputChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <input type="password" onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Keypad;
