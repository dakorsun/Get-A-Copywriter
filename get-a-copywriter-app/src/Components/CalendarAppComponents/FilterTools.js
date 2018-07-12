import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterTools extends Component{
    render() {
        return(
            <div className='filter-tools'>
                <div className='filter'>
                    <p>
                    Campaigns
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                </div>
                <div className='filter'>
                    <p>
                    Blog post, White p...
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                </div>
                <div className='filter'>
                    <p>
                    Statuses
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                </div>
                <div className='filter'>
                    <p>
                    Creator
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                </div>
                <div className='filter'>
                    <p>
                    Tegs
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state =>({
        isFiltersOpened:  state.calendarAppReducer.filters.isOpened
    }),
    dispatch => ({

    })
)(FilterTools);