import React, { Component } from 'react';
import CalendarApp from './Components/CalendarApp';
import Header from './Components/Header';
import SubMenu from './Components/SubMenu';
import Footer from './Components/Footer';
import Plus from './Components/Plus';
import PopUps from './Components/PopUps';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubMenu />
        <CalendarApp />
        <Footer/>
        <Plus/>
        <PopUps/>
      </div>
    );
  }
}

export default App;