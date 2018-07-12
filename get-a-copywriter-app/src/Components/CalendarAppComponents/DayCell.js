import React, { Component } from 'react';
import DayApp from './DayApp';
import { connect } from 'react-redux';

class DayCell extends Component {
    
    mouseHover() {
        this.props.onMouseEnter();
    }

    mouseLeave() {
        this.props.onMouseLeave();
    }
    
    render() {
        return(
            <div 
                onMouseEnter={this.mouseHover.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
                className='day-cell'>
                <DayApp/>
            </div>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onMouseEnter: () => {
            dispatch({type: 'DAYCELL_HOVER'})
        },
        onMouseLeave: () => {
            dispatch({type: 'DAYCELL_LEAVE'})
        }

    })
)(DayCell);