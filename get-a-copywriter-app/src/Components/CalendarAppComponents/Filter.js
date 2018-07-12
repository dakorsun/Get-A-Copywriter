import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component{
    
    filterClick() {
        console.log('3');
        this.props.onFiltersClick();
    }
    
    render(){
        return(
            <div
                onClick={this.filterClick.bind(this)} 
                className='filters button'>
                Filters
            </div>
        )
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        onFiltersClick: () => {
            dispatch({type: 'FILTERS_CLICK'})
        }

    })
)(Filter);