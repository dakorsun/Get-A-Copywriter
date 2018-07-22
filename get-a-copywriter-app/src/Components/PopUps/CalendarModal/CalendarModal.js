import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import Calendar from './Calendar'; 


class CalendarModal extends Component {
    
   
    render() {
        
        return(
            <div className='calendar-pop-up'>
                <Head />
                <Calendar />
                <div className='buttons'>
                    <div className='button'>
                    CANCEL
                    </div>
                    <div className='button'>
                    OK
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({ 
        calendarWidget: state.calendarAppReducer.calendarWidget
    }),
    dispatch => ({

    })
)(CalendarModal);

