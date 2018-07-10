import React, { Component } from 'react';
import CalendarApp from './Components/CalendarApp';
import Header from './Components/Header';
import SubMenu from './Components/SubMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubMenu />
        <CalendarApp />
      </div>
    );
  }
}

export default App;