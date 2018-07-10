import React, { Component } from 'react';
import DayCell from './DayCell';

class CalendarRow extends Component {
    render() {
        return(
            <div className='calendar-row'>
                <DayCell />
                <DayCell />
                <DayCell />
                <DayCell />
                <DayCell />
                <DayCell />
                <DayCell />
            </div>
        )
    }
}

export default CalendarRow;