import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import Main from './Main';

class DayCell extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            onFocus: false
        }


    }

    setCellStyle() {
        
        if(this.props.day.container.isToday){
            return 'day-cell today';
        };
        if(!this.props.day.container.isMonthActual){
            return 'day-cell shaded';
        };
        return 'day-cell';
    }

    mouseHover() {
        this.setState({onFocus: true});
        this.props.onMouseLeave(this.props.day.id, this.props.weekIndex);
    }

    mouseLeave() {
        this.setState({onFocus: false});
        this.props.onMouseLeave(this.props.day.id, this.props.weekIndex);
    }
    
    render() {
        return(
            <div 
                onMouseEnter={this.mouseHover.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
                className={this.setCellStyle()}>
                <Head 
                    day={this.props.day} 
                    onFocus={this.state.onFocus}/>
                <Main 
                    projects={this.props.day.projects}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        mainScreen: state.calendarAppReducer.monthsToRender.mainScreen
    }),
    dispatch => ({
        onMouseEnter: (id, i) => {
            dispatch({type: 'DAYCELL_HOVER', id: id, index: i})
        },
        onMouseLeave: (id, i) => {
            dispatch({type: 'DAYCELL_LEAVE', id: id, index: i})
        }

    })
)(DayCell);