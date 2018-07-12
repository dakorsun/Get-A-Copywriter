import React, { Component } from 'react';
import Heading from './CalendarAppComponents/Heading'; 
import FilterTools from './CalendarAppComponents/FilterTools'; 
import Calendar from './CalendarAppComponents/Calendar'; 
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class CalendarApp extends Component {
    render() {
        return(
            <div className = 'calendar-app'>
                <Heading />
                <ReactCSSTransitionGroup
                        transitionName="filters"
                        transitionAppear={true}>
                        {this.props.isFiltersOpened && <FilterTools />}
                    </ReactCSSTransitionGroup>
                <Calendar />
            </div>
        )
    }
}

export default connect(
    state => ({
        isFiltersOpened:  state.calendarAppReducer.filters.isOpened
    }),
    dispatch => ({

    })
)(CalendarApp);