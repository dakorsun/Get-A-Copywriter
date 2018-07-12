import React, { Component } from 'react';
import DateSlider from './DateSlider';
import Filter from './Filter';
import { connect } from 'react-redux';

class Heading extends Component{
    
    filterClick(){
        console.log('1');
        this.props.onFiltersClick();
    }
    
    currentStepClick(){
        this.props.onCurrentStepClick();
    }

    publishDateClick(){
        this.props.onPublishDateClick()
    }

    todayClick(){
        this.props.onTodayClick()
    }
    
    render() {
        return( 
            <div className='heading'>
                <div className='left-part'> 
                    <Filter/>
                    <div 
                        onСlick={this.todayClick.bind(this)}
                        className='today button'>
                        Today
                    </div>
                </div>
                <div className='center-part'>
                    <DateSlider />
                </div>    
                <div className='right-part'>
                    <div 
                        onClick={this.currentStepClick.bind(this)}
                        className='current-step button'>
                        Current step
                    </div>
                    <div 
                        onClick={this.publishDateClick.bind(this)}
                        className='publish-date button'>
                        Publish date
                    </div>
                </div>
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
        },
        onCurrentStepClick: () => {
            dispatch({type: 'CURRENT_STEP_CLICK'})
        },
        onPublishDateClick: () => {
            dispatch({type: 'PUBLISH_DATE_CLICK'})
        },
        onTodayClick: () => {
            dispatch({type: 'TODAY_CLICK'})
        }

    })
)(Heading);