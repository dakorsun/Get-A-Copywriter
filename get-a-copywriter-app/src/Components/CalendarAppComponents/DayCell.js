import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import Main from './Main';

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
                <Head 
                    day={this.props.day}/>
                <Main />
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