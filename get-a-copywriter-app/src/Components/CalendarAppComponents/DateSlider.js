import React, { Component } from 'react';
import { connect } from 'react-redux';

class DateSlider extends Component{
    
    leftClick(){
        this.props.leftClick();
    }

    rightClick(){
        this.props.rightClick();
    }
    
    
    render() {
        return(
            <div className='date-slider'>
                <div 
                    onClick={this.leftClick.bind(this)}
                    className='img'>
                    <div className='left arrow' />
                </div>
                <div className='date'>
                    <div className='mounth'>
                        November
                    </div>
                    <div className='year'>
                        2018 
                    </div>
                </div>
                <div className='img' 
                    onClick={this.rightClick.bind(this)}
                    className='img'>
                    <div className='right arrow' />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        leftClick: () => {
            dispatch({type: 'SWITCH_SCREEN', direction: 'left'})
        },
        rightClick: () => {
            dispatch({type: 'SWITCH_SCREEN', direction: 'right'})
        }
    })
  )(DateSlider);;