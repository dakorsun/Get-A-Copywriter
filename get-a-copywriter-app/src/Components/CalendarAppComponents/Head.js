import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBtn from './AddBtn';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import setDayName from '../../Reducers/CalendarApp/setDayName'


class Head extends Component {
    
    clickAddBtn(){
        this.props.openAddPopUp(this.props.day.day, this.props.day.month, this.props.day.year);
    }

    render() {
        return(
            <div className='head'>
            <ReactCSSTransitionGroup
                transitionName="addBtn"
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}>
                {this.props.onFocus && <AddBtn onClick={this.clickAddBtn.bind(this)}/> || !this.props.onFocus && null}
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
                                {setDayName(this.props.day)}
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
        openAddPopUp: () => {
            dispatch({ type: 'OPEN_ADD_POP_UP' })
        }
    })
)(Head);