import React from 'react';

class KeyedFragmentExample extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <React.Fragment key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const items = [
  { id: 1, title: 'Item1', description: 'This is the first item' },
  { id: 2, title: 'Item2', description: 'This is the second item' },
  { id: 3, title: 'Item3', description: 'This is the third item' },
];

function App() {
  return (
    <div className="App">
      <KeyedFragmentExample items={items} />
    </div>
  );
}

export default App;