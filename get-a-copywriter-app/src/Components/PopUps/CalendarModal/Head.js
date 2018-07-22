
import React, { Component } from 'react';
import { connect } from 'react-redux';
import setMonthFullName from '../../../Reducers/CalendarApp/setMonthFullName'


class Head extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            month: '10',
            year: '2018'
        }
    } 
   
    leftClick() {
        this.props.leftClick(this.props.month, this.props.year);
    };

    rightClick() {
        this.props.rightClick(this.props.month, this.props.year);
    }

    render() {
        
        return(
            <div className = 'head'>
                <div className='date'>
                    <div className='month'>
                        {setMonthFullName(this.props.month)}
                    </div>
                    <div className='year'>
                        {this.props.year}
                    </div>
                </div>
                <div className = 'switcher'>
                    <div 
                        onClick={this.leftClick.bind(this)}
                        className='img'
                    >
                        <div className='left arrow' />
                    </div>
                    <div className='img' 
                        onClick={this.rightClick.bind(this)}
                        className='img'
                    >
                        <div className='right arrow' />
                    </div>
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
        leftClick: (month, year) => {
            dispatch({ type: 'SWITCH_WIDGET_SCREEN', direction: 'left', actualMonth: month, actualYear: year})
        },
        rightClick: (month, year) => {
            dispatch({ type: 'SWITCH_WIDGET_SCREEN', direction: 'right', actualMonth: month, actualYear: year})
        }
    })
)(Head);

