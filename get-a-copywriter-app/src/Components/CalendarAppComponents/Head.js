import React, { Component } from 'react';
import { connect } from 'react-redux';


class Head extends Component {
    
    render() {
        return(
            <div className='head'>
                <div className='add'>
                    <div className='img'/>
                    <div className='text'>
                        Add
                    </div>
                </div>
                <div className='date'>
                    {this.props.day.day}
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
)(Head);