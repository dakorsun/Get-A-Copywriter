import React, { Component } from 'react';
import { connect } from 'react-redux';
import userAvatar from '../../Styles/images/png/user/user.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UserPopUp from './UserPopUp'


class User extends Component{
    
    openUserPopUp(){
        this.props.onOpenPopUp()
    }

    closeUserPopUp(){
        this.props.onClosePopUp()
    }

    render() {
        return(
            <div
                onMouseEnter={this.openUserPopUp.bind(this)}
                onMouseLeave={this.closeUserPopUp.bind(this)}
                className='user-wrapper'>
                <div className='user'>
                    <img src={userAvatar}/>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="basic"
                    transitionAppear={true}>
                    {this.props.isOpened && <UserPopUp/> || !this.props.isOpened && null}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default connect(
    state => ({
        isOpened: state.headerReducer.user.isOpened
    }),
    dispatch => ({
        onOpenPopUp: () => {
            dispatch({type: 'HEADER_USER_HOVER'})
        },
        onClosePopUp: () => {
            dispatch({type: 'HEADER_USER_LEAVE'})
        }
    }),
)(User);