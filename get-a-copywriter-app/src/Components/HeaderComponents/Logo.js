import React, { Component } from 'react';
import logo from '../../Styles/images/png/large@2x.png';

class Logo extends Component{
    render() {
        return(
            <div className='logo'>
                <img src={logo}/>
            </div>
        )
    }
}

export default Logo;