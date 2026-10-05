import React, { Component } from 'react';

class ClassCounter extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  // Lifecycle: runs once after component is mounted
  componentDidMount() {
    console.log('[Class] Component mounted');
  }

  // Lifecycle: runs after every state/prop update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`[Class] Count changed to: ${this.state.count}`);
    }
  }

  // Lifecycle: runs before component is removed
  componentWillUnmount() {
    console.log('[Class] Component unmounted');
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: this.props.initialValue || 0 });

  render() {
    const { label } = this.props;
    const { count } = this.state;

    return (
      <div style={{ border: '2px solid blue', padding: '16px', margin: '10px' }}>
        <h2>Class Component {label && `- ${label}`}</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={this.increment}>+ Increment</button>{' '}
        <button onClick={this.decrement}>- Decrement</button>{' '}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassCounter;