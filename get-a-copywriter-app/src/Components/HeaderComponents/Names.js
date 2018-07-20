import React, { Component } from 'react';
import { connect } from 'react-redux';
import NamesPopUp from './NamesPopUp';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Names extends Component{
    
    constructor(props){
        super(props);

    }
    
    headerNamesHover(){
        console.log('1')
        this.props.onHeaderNamesHover()
    }

    headerNamesLeave(){
        this.props.onHeaderNamesLeave()
    }

    render() {
      
        

        return(
            <div 
                className='Names'
                onMouseEnter={this.headerNamesHover.bind(this)}
                onMouseLeave={this.headerNamesLeave.bind(this)}
                >
                <p className='text'>Douglas Page</p>
                <div className='img'>
                    <div 
                        className='arrow down'/>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="basic"
                    transitionAppear={true}>
                    {this.props.isOpened && <NamesPopUp/> || !this.props.isOpened && null}
                </ReactCSSTransitionGroup>
            </div>            
            
        )
    }
}

export default connect(
    state => ({
        isOpened: state.headerReducer.names.isOpened,
        isFirstTimeLanded: state.headerReducer.names.isFirstTimeLanded,
    }),
    dispatch => ({
        onHeaderNamesHover: () => {
            dispatch({ type: 'HEADER_NAMES_HOVER'})
        },
        onHeaderNamesLeave: () => {
            dispatch({ type: 'HEADER_NAMES_LEAVE'})
        },
    })
  )(Names);
