import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.setInputRef = element => {
      this.inputRef = element;
    };
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setInputRef} placeholder="focus me on mount" />
      </div>
    );
  }
}

export default FocusInput;