import React, { Component } from 'react';
import { connect } from 'react-redux';


class Input extends Component {
    
   
    render() {
        
        return(
            <div className = { this.props.classNaming }>
                { this.props.error !== '' ? 
                    <div className='input'>
                        <p>{this.props.name}</p>
                        <input 
                            onChange={ this.props.onChange }
                            onFocus = { this.props.onFocus }
                            value = { this.props.value }
                            className = 'error'
                        />
                        <div className='error-message'>
                            {this.props.error}
                        </div>
                    </div>
                    :
                    <div className='input'>
                        <p>{this.props.name}</p>
                        <input 
                            onChange={ this.props.onChange }
                            onFocus = { this.props.onFocus }
                            value = { this.props.value }
                        />
                    </div>
                }
            </div>
        )
    }
}


export default connect(
    state => ({ 

    }),
    dispatch => ({

    })
)(Input);
