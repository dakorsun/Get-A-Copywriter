import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBtn from './AddBtn';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import setMonthShortName from '../../Reducers/CalendarApp/setMonthShortName'


class Head extends Component {
    
    

    render() {
        return(
            <div className='head'>
            <ReactCSSTransitionGroup
                transitionName="addBtn"
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}>
                {this.props.onFocus && <AddBtn /> || !this.props.onFocus && null}
            </ReactCSSTransitionGroup>
                {this.props.day.container.isToday ? 
                        <div className='date'>
                            <div className='text'>
                                Today
                            </div>
                            <div className='number'>
                                {this.props.day.day}
                            </div>
                        </div>
                    :
                    this.props.day.container.isFirstDay ?
                        <div className='date'>
                            <div className='text'>
                                {setMonthShortName(this.props.day.month)}
                            </div>
                            <div className='number'>
                                {this.props.day.day}
                            </div>
                        </div>
                    :
                        <div className='date'>
                            <div className='number'>
                                {this.props.day.day}
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default connect(
    state => ({ 

    }),
    dispatch => ({
        
    })
)(Head);