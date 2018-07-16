import React, { Component } from 'react';
import DayCell from './DayCell';
import { connect } from 'react-redux';

class CalendarRow extends Component {
    
    setCalendarIndex(id){
        this.props.calendar.days.map((day, i) => {
            if(day.id === id){
                return i;
            }
        })
    }
    
    render() {
        return(
            <div className='calendar-row'>
                {this.props.days.map((day, i) =>
                <DayCell 
                    day={day}
                    dayIndex={i}
                    weekIndex={this.props.weekIndex}/>
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        
    })
)(CalendarRow);