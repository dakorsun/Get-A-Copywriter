import React, { Component } from 'react';
import { connect } from 'react-redux';
                    
                    
class Plus extends Component {
    
    clickPlus(){
        this.props.callAdd();
    }
    
    render() {
        return(
            <div 
                onClick={this.clickPlus.bind(this)}
                className='plus-fixed'>
                +
            </div>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        callAdd: () => (
            dispatch({type: 'CALL_ADD'})
        )
    })
)(Plus);