import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fullnames = {
  ryoma: '坂本龍馬',
  taka: '西郷隆盛',
  kai: '勝海舟',
};
const getFullname = nickname => fullnames[nickname];
// const element = <h1>Hello, {getFullname('ryoma')}</h1>;

function Hello(name) {
  if (typeof name === 'string') {
    return <h1>Hello, {name}</h1>;
  }
  return <h1>Who are you?</h1>;
}

function Names(names) {
  const list = [];
  for (let i=0; i<names.length; i++){
    list.push(<li>{names[i]}</li>);
  }
  return <ul>{list}</ul>;
}

function wrap(component) {
  return <div>{component}</div>;
}

const inputVlue = 'some value';

const myList = (
  <ul>
    {[1, 2, 3].map(num => <li>{num}</li>)}
  </ul>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, {getFullname('ryoma')}!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {Hello('React')}
        </p>
        <p>
          {Hello(123)}
        </p>
        <p>
          {Names([123, 'ABC', 456])}
        </p>
        <p>
          {wrap(<h2>Hello, Hello, Hello, Hello, Hello, WORLD.</h2>)}
        </p>
        <p>
          <input type="text" value={inputVlue}/>
        </p>
        <p>
          {myList}
        </p>
      </div>
    );
  }
}

export default App;
