import React, { Component } from 'react';
import Days from './Days';
import CalendarRow from './CalendarRow';
import { connect } from 'react-redux';

class Calendar extends Component {
    render() {
        return(
            <div className='calendar'>
                <Days />
                <CalendarRow />
                <CalendarRow />
                <CalendarRow />
                <CalendarRow />
                <CalendarRow />
                <CalendarRow />
            </div>
        )
    }
}

export default connect(
    state => ({
        mounths: state.calendarAppReducer.mounths.november
    }),
    dispatch => ({

    })
)(Calendar);

/* 
{this.props.november.map(week => 
    <CalendarRow 
        weekIndex={week.index}/>
)} */