import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarRow from './CalendarRow';
import Names from './Names'


class Calendar extends Component {
    
   
    render() {
        
        return(
            <div className = 'calendar-widget'>
                <Names />
                {this.props.mainScreen.map((week, i) => 
                    <CalendarRow 
                        days = {week.days}
                        weekIndex = {i}
                    />
                )}
            </div>
                
        )
    }
}


export default connect(
    state => ({ 
        mainScreen: state.calendarAppReducer.calendarWidget.container.render.mainScreen
    }),
    dispatch => ({

    })
)(Calendar);

