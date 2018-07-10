import React, { Component } from 'react';

class Navigation extends Component{
    render() {
        return(
            <div className = 'Navigation'>
                <div className = 'Nav-button'>Ideate</div>
                <div className = 'Nav-button'>Plan</div>
                <div className = 'Nav-button'>Order</div>
                <div className = 'Nav-button'>Manage</div>
                <div className = 'Nav-button'>Organize</div>
                <div className = 'underline'/>
            </div>
        )    
    }
} 

export default Navigation;