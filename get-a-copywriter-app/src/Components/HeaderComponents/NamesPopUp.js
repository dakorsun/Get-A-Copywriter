import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';


class NamesPopUp extends Component{ 
    


    render() {
        return(      
                    <div className='pop-up'>
                        {
                            this.props.popUpNames.map(name => 
                                <div 
                                    key={shortid.generate()}
                                    className='name'>
                                    <p>{name}</p>
                                </div>
                            )
                        
                        }
                    </div> 
        )
    }
}

export default connect(
    state => ({
        popUpNames: state.headerReducer.names.popUp.names
    }),
    dispatch => ({
    })
)(NamesPopUp)


