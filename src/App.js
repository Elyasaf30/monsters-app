import React from "react";

import './App.css'

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component'

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

  handleChange = (e) => {
    this.setState({ searchBox: e.target.value })
  }

  render() {
    const { monsters, searchBox } = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchBox.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monster legend</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;