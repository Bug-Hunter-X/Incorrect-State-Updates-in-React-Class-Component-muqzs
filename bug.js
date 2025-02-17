```javascript
// Incorrect way to update state in React class component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleClick = () => {
    // Incorrect: Directly mutates the state object
    this.state.count++; 
    this.setState({}); // This won't trigger a re-render
  }; 
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```