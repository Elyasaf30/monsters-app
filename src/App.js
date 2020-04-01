import React from "react";

import './App.css'

import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState({ monsters: users }, () => console.log(this.state))
      );
  }

  render() {
    const { monsters, searchBox } = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchBox.toLocaleLowerCase()))
    return (
      <div className="App">
        <input type="search" placeholder="Search for monster" maxLength="15" onChange={e => this.setState({ searchBox: e.target.value })} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;