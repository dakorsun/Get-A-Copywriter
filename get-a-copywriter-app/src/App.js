import React, { Component } from 'react';
import CalendarApp from './Components/CalendarApp';
import Header from './Components/Header';
import SubMenu from './Components/SubMenu';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubMenu />
        <CalendarApp />
        <Footer/>
      </div>
    );
  }
}

export default App;