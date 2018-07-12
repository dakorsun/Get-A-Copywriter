import React, { Component } from 'react';

class DateSlider extends Component{
    render() {
        return(
            <div className='date-slider'>
                <div className='img'>
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
                <div className='img'>
                    <div className='right arrow' />
                </div>
            </div>
        )
    }
}

export default DateSlider;