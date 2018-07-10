import React, { Component } from 'react';
import DateSlider from './DateSlider';

class Heading extends Component{
    render() {
        return(
            <div className='heading'>
                <div className='left-part'> 
                    <div className='filters button'>
                        Filters
                    </div>
                    <div className='today button'>
                        Today
                    </div>
                </div>
                <div className='center-part'>
                    <DateSlider />
                </div>    
                <div className='right-part'>
                    <div className='current-step button'>
                        Current step
                    </div>
                    <div className='publish-date button'>
                        Publish date
                    </div>
                </div>
            </div>
        )
    }
}

export default Heading;