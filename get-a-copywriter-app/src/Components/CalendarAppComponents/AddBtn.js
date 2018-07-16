import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddBtn extends Component {
    
    render() {
        return(
            <div className='add'>
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

    })
)(AddBtn);