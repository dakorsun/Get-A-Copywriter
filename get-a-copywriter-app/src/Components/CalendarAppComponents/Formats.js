import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormatsPopUp from './FormatsPopUp';


class Formats extends Component {
  
    
    clickFormats() {
        this.props.onClickFormats();
    }
    
 
    render() {
        return(
            <div className='filter formats'>
                <div 
                    onClick={this.clickFormats.bind(this)}
                    >
                    <p>
                    Blog post, White p...
                    </p>
                    <div className='img'>
                        <div className='arrow down'/>
                    </div>
                    
                </div>
                <ReactCSSTransitionGroup
                transitionName="basic"
                transitionAppear={true}>
                {this.props.isOpened && <FormatsPopUp/> || !this.props.isOpened && null}
            </ReactCSSTransitionGroup>
        </div>
        )
    }
}

export default connect(
    state => ({
        isOpened: state.calendarAppReducer.formats.isOpened
    }),
    dispatch => ({
        onClickFormats: () => {
            dispatch({type: 'FORMATS_CLICK'})
        }

    })
)(Formats);