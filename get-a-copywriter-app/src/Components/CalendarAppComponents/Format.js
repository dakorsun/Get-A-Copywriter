                 
                    
import React, { Component } from 'react';
import { connect } from 'react-redux';
                    
                    
class Format extends Component {
    
    constructor(props){
        super(props)

        this.state={
            isChecked: this.props.isChecked
        }
    }

    formatClick(){
        this.setState({isChecked: !this.state.isChecked})
    }
    
    render() {
        return(
            <div 
                onClick={this.formatClick.bind(this)}
                className='format'>
                <div className={this.state.isChecked ? 'checked checkbox' : 'checkbox'}/>
                <div className='format-name'>
                    {this.props.name}
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
)(Format);