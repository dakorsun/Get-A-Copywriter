import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project'


class Main extends Component {
    
    render() {
        return(
            <div className='main'>    
                {this.props.projects.map((project, i) => 
                    i > 3 ? 
                        i > 4 ? 
                            null 
                        :   <div className='more'>
                                +{this.props.projects.length - 3} more
                            </div> 
                    : <Project
                        project={project}/>
                )

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
)(Main);

/* {this.props.projects.lenght > 0 ?
    this.props.projects.length > 3 ? 
        this.props.projects.map((project, i) => 
            i < 3 ? 
                <Project 
                    project={project}/>
                : null
        )
        : this.props.projects.map((project) => (
            console.log(project),
            <Project
                project={project}/>
        )
    ): null
} */