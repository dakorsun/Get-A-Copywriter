import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutPopUp from './AboutPopUp';
import circleHelp from '../../Styles/images/png/circle-help@2x.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends Component{
    
    openAboutPopUp(){
        this.props.onOpenPopUp()
    }

    closeAboutPopUp(){
        this.props.onClosePopUp()
    }
    
    render() {
        return(
            <div 
                onMouseEnter={this.openAboutPopUp.bind(this)} 
                onMouseLeave={this.closeAboutPopUp.bind(this)}
                className='about-wrapper'>
                <div
                    className='about'>
                    <img src={circleHelp}/>
                    <ReactCSSTransitionGroup
                        transitionName="basic"
                        transitionAppear={true}>
                        {this.props.isOpened && <AboutPopUp/> || !this.props.isOpened && null}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        isOpened: state.headerReducer.about.isOpened
    }),
    dispatch => ({
        onOpenPopUp: () => {
            dispatch({type: 'HEADER_ABOUT_HOVER'})
        },
        onClosePopUp: () => {
            dispatch({type: 'HEADER_ABOUT_LEAVE'})
        }
    })
)(About);