import React, { Component } from 'react';
import DayCell from './DayCell';
import { connect } from 'react-redux';

class CalendarRow extends Component {
    render() {
        return(
            <div className='calendar-row'>
                {this.props.days.map((day, i) =>
                <DayCell 
                    day={this.props.days[i]}/>
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