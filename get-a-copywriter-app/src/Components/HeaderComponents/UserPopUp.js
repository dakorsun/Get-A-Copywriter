import React, { Component } from 'react';
import { connect } from 'react-redux';
import money from '../../Styles/images/png/user/money-16@2x.png';
import client from '../../Styles/images/png/user/client-16@2x.png';
import user from '../../Styles/images/png/user/user-16@2x.png';
import integ from '../../Styles/images/png/user/16@2x.png';
import refer from '../../Styles/images/png/user/referrals-16@2x.png';
import signout from '../../Styles/images/png/user/signout-16@2x.png';




class UserPopUp extends Component{
    render() {
        return(
            <div className='pop-up'>
                <div className='head'>
                    <div className='name'>
                        {this.props.userName}
                    </div>
                    <div className='sub'>
                        Account settings
                    </div> 
                </div>
                <div className='links'>
                    <div className='link'>
                        <img src={money}/>
                        <div> 
                            Billing
                        </div>
                    </div>
                    <div className='link'>
                        <img src={client}/>
                        <div> 
                            Clients
                        </div>
                    </div>
                    <div className='link'>
                        <img src={user}/>
                        <div> 
                            Users
                        </div>
                    </div>
                    <div className='link'>
                        <img src={integ}/>
                        <div> 
                            Integration
                        </div>
                    </div>
                    <div className='link'>
                        <img src={refer}/>
                        <div> 
                            Referrals
                        </div>
                    </div>
                    <div className='link last'>
                        <img src={signout}/>
                        <div> 
                            Sign Out
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        userName: state.headerReducer.user.name
    }),
    dispatch => ({

    })
)(UserPopUp)