import React, { Component } from 'react';
import { connect } from 'react-redux';
import avatar from '../../Styles/images/png/manager-avatar.jpg';
import support from '../../Styles/images/png/support-2@2x.png';
import questionCircle from '../../Styles/images/png/circle-help@2x.png';
import paper from '../../Styles/images/png/doc-1-2@2x.png';


class AboutPopUp extends Component{
    render() {
        return(
            <div className='pop-up'>
                <div className='links'>
                    <div className='link'>
                        <img src={support}/>
                        <p>
                            Message support
                        </p>
                    </div>
                    <div className='link'>
                        <img src={questionCircle}/>
                        <p>
                            FAQ
                        </p>
                    </div>
                    <div className='link'>
                        <img src={paper}/>
                        <p>
                            API
                        </p>
                    </div>
                </div>
                <div className='manager'>
                    <p>Your account manager:</p>
                    <div className='wrapper'>
                        <img src={avatar}/>
                    </div>
                    <div className='info'>
                        <p>
                            {this.props.managerInfo.name}
                        </p>
                        <p>
                            {this.props.managerInfo.id}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        managerInfo: state.headerReducer.about.manager, 
        links: state.headerReducer.about.links
    }),
    dispatch => ({

    })
)(AboutPopUp)