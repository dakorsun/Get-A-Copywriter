import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddBtn extends Component {
    
    clickAddBtn(){
        this.props.callAdd();
    }

    render() {
        return(
            <div 
                className='add'
                onClick = { this.clickAddBtn.bind(this) }
            >
                <div className='img'>
                    +
                </div>
                <div className='text'>
                    Add
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        callAdd: () => (
            dispatch({type: 'OPEN_ADD_MODAL'})
        )
    })
)(AddBtn);