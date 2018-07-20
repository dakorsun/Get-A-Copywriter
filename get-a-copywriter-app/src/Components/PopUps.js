import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPopUp from './PopUps/AddPopUp';

class PopUps extends Component {
    

    render() {
        return(
            <div>
                {
                    this.props.isAddPopUpOpened ? <AddPopUp /> : null
                }
            </div>
        )
    }
}

export default connect(
    state => ({ 
        isAddPopUpOpened: state.calendarAppReducer.isAddPopUpOpened
    }),
    dispatch => ({

    })
)(PopUps);