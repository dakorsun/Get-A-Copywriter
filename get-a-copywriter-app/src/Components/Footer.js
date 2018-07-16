import React, { Component } from 'react';
import { connect } from 'react-redux';
                    
                    
class Footer extends Component {
    
  
    
    render() {
        return(
            <div className='footer'>
                <div className='prop'>
                    © 2018 Get A Copywriter.
                </div>
                <div className='question'>
                    How can we improve this page?
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
)(Footer);