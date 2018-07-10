import React, { Component } from 'react';
import Logo from './HeaderComponents/Logo';
import Navigation from './HeaderComponents/Navigation';
import Names from './HeaderComponents/Names';
import Messages from './HeaderComponents/Messages';
import About from './HeaderComponents/About';
import User from './HeaderComponents/User';


class Header extends Component {
    render() {
        return (
            <div className = 'header'>
                <div className = "left-part">
                    <Logo />
                    <Navigation />
                </div>
                <div className='right-part'>
                    <Names />
                    <div className = 'icon-block'>        
                        <Messages />
                        <About />
                        <User />
                    </div>
                </div>    
            </div>
        )
    }
}

export default Header;