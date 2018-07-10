import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';


class PopUp extends Component{ 
    
    render() {
        return(
            <div className={this.props.isOpened ? 'pop-up open' : !this.props.isOpened ? this.props.isFirstTimeLanded ? 'pop-up hidden' : 'pop-up hide'
            : 'none'}>
                {
                    this.props.popUpNames.map(name => {
                        return (
                            <div 
                                key={shortid.generate()}
                                className='name'>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        isOpened: state.headerReducer.names.isOpened,
        isFirstTimeLanded: state.headerReducer.names.isFirstTimeLanded,
        popUpNames: state.headerReducer.names.popUp.names
    }),
    dispatch => ({
    })
)(PopUp)


