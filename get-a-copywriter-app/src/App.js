import React, { Component } from 'react';
import CalendarApp from './Components/CalendarApp';
import Header from './Components/Header';
import SubMenu from './Components/SubMenu';
import Footer from './Components/Footer';
import Plus from './Components/Plus';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubMenu />
        <CalendarApp />
        <Footer/>
        <Plus/>
      </div>
    );
  }
}

export default App;