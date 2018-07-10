import React, { Component } from 'react';

class DateSlider extends Component{
    render() {
        return(
            <div className='date-slider'>
                <div className='left-arrow' />
                <div className='date' />
                <div className='right-arrow' />
            </div>
        )
    }
}

export default DateSlider;