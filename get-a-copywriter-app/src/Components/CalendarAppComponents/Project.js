import React, { Component } from 'react';
import { connect } from 'react-redux';
import userDefault from '../../Styles/Assets/user-default.png' 


class Project extends Component {
    
    setProjectStatusClassName() {
        let result;
        
        switch(this.props.project.status){
            case 'Published':
                result = 'project published';
                break;
            
            case 'Editing':
                result = 'project editing';
                break;
        
            case 'Revision':
                result = 'project revision';
                break;
        
            case 'Approved':
                result = 'project approved';
                break;

            default: 
                result = 'project';
                break ;  
        };
        return result;
    }
 
    render() {
        return(
            <div className={this.setProjectStatusClassName()}>    
                {this.props.project.head ?
                    <div className='project-head'>
                        {this.props.project.head}
                    </div>
                : <div className='project-head'/>}
                <div className='content'>
                    {this.props.project.content}
                </div>
                <div className='bottom'>
                    {this.props.project.autor ? 
                        <div className='user'>
                            <div className='img'>
                                <img src={userDefault} alt='avatar'/>
                            </div>
                            <div className='initials'>
                                {this.props.project.autor.initials}
                            </div>
                        </div>
                    : <div/>}    
                    <div className='status'>
                        <div className='icon'/>
                        <div className='status-text'>
                            {this.props.project.status}
                        </div>
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
)(Project);