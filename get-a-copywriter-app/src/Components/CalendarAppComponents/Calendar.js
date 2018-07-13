import React, { Component } from 'react';
import Days from './Days';
import CalendarRow from './CalendarRow';
import { connect } from 'react-redux';
import shortid from 'shortid';

class Calendar extends Component {
    render() {
        return(
            <div className='calendar'>
                <Days />
                 {this.props.actualDaysScreen.map((week, i) => 
                    <CalendarRow 
                        days={this.props.actualDaysScreen[i].days}/>
                )} 
            </div>
        )
    }
}

export default connect(
    state => ({
        leftDaysScreen: state.calendarAppReducer.monthsToRender.leftScreen,
        actualDaysScreen: state.calendarAppReducer.monthsToRender.mainScreen,
        rightDaysScreen: state.calendarAppReducer.monthsToRender.rightScreen
    }),
    dispatch => ({

    })
)(Calendar);
