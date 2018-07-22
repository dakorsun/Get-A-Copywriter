import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from './Day';


class CalendarRow extends Component {
    
   
    render() {
        
        return(
            <div className = 'week'>
                {
                    this.props.days.map((day, i) => 
                        <Day 
                            day = {day}
                            dayIndex = {i}
                            weekIndex = {this.props.weekIndex}
                        />
                    )
                }
            </div>    
        )
    }
}


export default connect(
    state => ({ 
        mainScreen: state.calendarAppReducer.calendarWidget.container.render.mainScreen,
        month: state.calendarAppReducer.calendarWidget.container.render.month
    }),
    dispatch => ({

    })
)(CalendarRow);

