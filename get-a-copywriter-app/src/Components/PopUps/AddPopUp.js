import React, { Component } from 'react';
import { connect } from 'react-redux';
class AddPopUp extends Component {
    

    render() {
        return(
            <div className='pop-up-fixed'>
                <div className='add-project'>
                    <div className='head'>
                        <div className='text' >
                            Add project 
                        </div>
                        <div className='close-x' />
                    </div>
                    <form>
                        <div className='input'>
                            <p>Project topic*</p>
                            <input />
                        </div>
                        <div className='input'>
                            <p>Project brief</p>
                            <input />
                        </div>
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
                                <div className='filter'>
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
                                <div className='filter'>
                                    <p>
                                    20 Nov 2018
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
                    <div className='button primary-s'>
                        Save Draft
                    </div>
                    <div className='button secondary-s'>
                        Order
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

    })
)(AddPopUp);
