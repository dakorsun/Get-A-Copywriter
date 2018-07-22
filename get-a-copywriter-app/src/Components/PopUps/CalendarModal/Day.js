
import React, { Component } from 'react';
import { connect } from 'react-redux';
import setMonthFullName from '../../../Reducers/CalendarApp/setMonthFullName'


class Day extends Component {
    
    selectDay() {
        this.props.selectDay(this.props.weekIndex, this.props.dayIndex)
    }

    render() {
        
        return(
            <div 
                onCLick = { this.selectDay.bind(this) }
                className = { this.props.month === this.props.day.month ? 'day' : 'day not-actual'}
            >
                <div className = { this.props.day.isSelected ? 'selected' : '' }>
                    {this.props.day.day}
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({ 
        month: state.calendarAppReducer.calendarWidget.container.render.month,
        year: state.calendarAppReducer.calendarWidget.container.render.year
    }),
    dispatch => ({
       selectDay: (week, day) => {
           dispatch({ type: 'SELECT_MODAL_DAY', week: week, day: day })
       }
    })
)(Day);



