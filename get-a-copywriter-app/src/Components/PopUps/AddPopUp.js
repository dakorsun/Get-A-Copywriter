import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import TextArea from './TextArea';
import CalendarModal from './CalendarModal/CalendarModal';


class AddPopUp extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            topic: '',
            brief: '',
            errorTopic: '',
            errorBrief: '',
            isCalendarOpened: true
        }
    }

    changeTopic(e) {
        e.preventDefault()
        this.setState({
            topic: e.target.value
        })
        
    }

    changeBrief(e) {
        e.preventDefault()
        this.setState({
            brief: e.target.value
        })
    }


    isTopicValid(topic){
        let error = '';
        
        if (topic === '') {
            error = 'This field is required'

            this.setState({
                errorTopic: error
            })            
            return false
        };

        this.setState({
            errorTopic: error
        })
        return true
    }

    orderClick() {

        if(this.isTopicValid(this.state.topic)) {
            this.props.onSaveClick();
        };
        
    }

    saveClick() {

        if(this.isTopicValid(this.state.topic)) {
            this.props.onSaveClick();
        };

    }

    clearTopicInput(){
        this.setState({
            errorTopic: ''
        })
    }

    clearBriefInput(){
        this.setState({
            errorTopic: ''
        })
    }

    closeModal(){
        this.props.closeModal();
    }

    openCalendarOnOrder() {
        this.props.openCalendar('order');
    }

    openCalendarOnPublish() {
        this.props.openCalendar('publish');
    }

    render() {
        return(
            <div className='pop-up-fixed'>
                <div className='add-project'>
                { this.props.isCalendarModalOpened.order ? <CalendarModal place='order'/> : null }
                { this.props.isCalendarModalOpened.publish ? <CalendarModal place='publish'/> : null }
                    <div className='head'>
                        <div className='text' >
                            Add project 
                        </div>
                        <div 
                            onClick = { this.closeModal.bind(this) }
                            className='close-x' 
                        />
                    </div>
                    <form>
                        <Input  
                            onChange={ this.changeTopic.bind(this) }
                            onFocus = { this.clearTopicInput.bind(this) }
                            value = { this.state.topic }
                            name = 'Project topic*'
                            error = { this.state.errorTopic }
                            classNaming = 'first'
                            type = 'text'
                        />
                        <TextArea  
                            onChange={ this.changeBrief.bind(this) }
                            onFocus = { this.clearTopicInput.bind(this) }
                            value = { this.state.brief }
                            name = 'Project brief'
                            error = { this.state.errorBrief }
                            classNaming = 'second'
                            type = 'textarea'
                        />
                        <div className='attach'>
                            <div className='img' />
                            <p>Attach files</p>
                        </div>
                        <div className='settings'>
                            <div className='first'>
                                <p>Format</p>
                                <div className='filter'>
                                    <p>
                                    White Paper
                                    </p>
                                    <div className='img'>
                                        <div className='arrow down'/>
                                    </div>
                                </div>
                            </div>
                            <div className='second'>
                                <p>Word count</p>
                                <input className='number' value='00,000'/>
                            </div>
                            <div className='third'>
                                <p>Compaing</p>
                                <div className='filter'>
                                    <p>Select compaing</p>
                                    <div className='img'>
                                        <div className='arrow down'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='settings second'>
                            <div className='first'>
                                <p>Order on</p>
                                <div 
                                    onClick = { this.openCalendarOnOrder.bind(this) }
                                    className='filter'
                                >
                                    <p>
                                    20 Nov 2018
                                    </p>
                                    <div className='img'>
                                        <div className='calendar-icon'/>
                                    </div>
                                </div>
                            </div> 
                            <div className='second'>
                                <p>Planned publish</p>
                                <div 
                                    onClick = { this.openCalendarOnPublish.bind(this) }
                                    className='filter'
                                >
                                    <p>
                                    23 Nov 2018
                                    </p>
                                    <div className='img'>
                                        <div className='calendar-icon'/>
                                    </div>
                                </div>
                            </div>
                            <div className='third'>
                                <p>Time</p>
                                <div className='filter'>
                                    <p>
                                    03:17 AM
                                    </p>
                                    <div className='img'>
                                        <div className='clock-icon'/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className='too-soon'>
                            <p>
                                Too soon
                            </p>
                            <div className='circle-help'/>
                        </div>
                    </form>
                    <div className='buttons'>
                        <div    onClick={this.saveClick.bind(this)}
                                className='button primary-s'>
                            <span>Save Draft</span>
                        </div>
                        <div    onClick={this.orderClick.bind(this)}
                                className='button secondary-s'>
                            <span>Order</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ 
        isCalendarModalOpened: state.calendarAppReducer.calendarWidget.isOpened
    }),
    dispatch => ({
        onSaveClick: () => {
            dispatch({ type: 'SAVE_CLICK' })
        },
        onOrderClick: () => {
            dispatch({ type: 'ORDER_CLICK' })
        },
        closeModal: () => {
            dispatch({ type: 'CLOSE_ADD_MODAL' })
        },
        openCalendar: (place) => {
            dispatch({ type: 'OPEN_DAY_MODAL', place: place })
        } 
    })
)(AddPopUp);
