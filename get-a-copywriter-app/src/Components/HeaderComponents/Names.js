import React, { Component } from 'react';
import { connect } from 'react-redux'
import PopUp from './PopUp';
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions/Header/index.js'

class Names extends Component{
    
    constructor(props){
        super(props);

    }
    
    headerNamesHover(){
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
                <div className='arrow down'/>
                <PopUp/>
            </div>            
            
        )
    }
}

export default connect(
    state => ({
        store: state
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