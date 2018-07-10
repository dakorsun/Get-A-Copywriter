import React, { Component } from 'react';
import Days from './Days';
import CalendarRow from './CalendarRow';

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

export default Calendar;