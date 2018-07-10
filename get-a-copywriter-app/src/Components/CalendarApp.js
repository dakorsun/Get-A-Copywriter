import React, { Component } from 'react';
import Heading from './CalendarAppComponents/Heading'; 
import FilterTools from './CalendarAppComponents/FilterTools'; 
import Calendar from './CalendarAppComponents/Calendar'; 


class CalendarApp extends Component {
    render() {
        return(
            <div className = 'calendar-app'>
                <Heading />
                <FilterTools />
                <Calendar />
            </div>
        )
    }
}

export default CalendarApp;