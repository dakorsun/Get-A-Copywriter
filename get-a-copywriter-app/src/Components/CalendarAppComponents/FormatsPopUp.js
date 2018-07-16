import React, { Component } from 'react';
import { connect } from 'react-redux';
import Format from './Format'


class FormatsPopUp extends Component {
  
 
    render() {
        return(
            <div className='pop-up'>
                {this.props.formats.map((format, i) => 
                    <Format 
                        name={format.name}
                        listIndex={i}
                        isChecked={format.isChecked}/>
                    
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        formats: state.calendarAppReducer.formats.list
    }),
    dispatch => ({

    })
)(FormatsPopUp);