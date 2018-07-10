import React, { Component } from 'react';

class FilterTools extends Component{
    render() {
        return(
            <div className='filter-tools'>
                <div className='filter'>
                    <p>
                    Campaigns
                    </p>
                    <div className='arrow down'/>
                </div>
                <div className='filter'>
                    <p>
                    Blog post, White p...
                    </p>
                    <div className='arrow down'/>
                </div>
                <div className='filter'>
                    <p>
                    Statuses
                    </p>
                    <div className='arrow down'/>
                </div>
                <div className='filter'>
                    <p>
                    Creator
                    </p>
                    <div className='arrow down'/>
                </div>
                <div className='filter'>
                    <p>
                    Tegs
                    </p>
                    <div className='arrow down'/>
                </div>
            </div>
        )
    }
}

export default FilterTools;