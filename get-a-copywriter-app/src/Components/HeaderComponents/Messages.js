import React, { Component } from 'react';
import { connect } from 'react-redux';
import messageLogo from '../../Styles/images/png/mail.png'

class Messages extends Component{
    render() {
        return(
            <div className='messages'>
                <img
                    src={messageLogo}/>
                <div className='message-icon'>
                {this.props.unReadMessages}
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        unReadMessages: state.headerReducer.messages.unRead
    })
)(Messages);