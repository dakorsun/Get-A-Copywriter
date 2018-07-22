import React, { Component } from 'react';
import { connect } from 'react-redux';


class Names extends Component {
    
   
    render() {
        
        return(
            <div className='names'>
                <div className='day'>
                    <div>S</div>
                </div>
                <div className='day'>
                    <div>M</div>
                </div>
                <div className='day'>
                    <div>T</div>
                </div>
                <div className='day'>
                    <div>W</div>
                </div>
                <div className='day'>
                    <div>T</div>
                </div>
                <div className='day'>
                    <div>F</div>
                </div>
                <div className='day'>
                    <div>S</div>
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
)(Names);

