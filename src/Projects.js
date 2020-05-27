import React from 'react';
import PROJECTS from './data/projecct';

// functions are stateless
const Project =props =>{
    const {title, image, description, link} =props.project;
        return(
            <div style={{display:'inline-block', width: 300, margin :10}}>
                <h3 style={{padding:10}}>{title}</h3>
                <img src={image} alt='Profile' style={{width : 200, height: 120}}/>
                <p style={{padding:5}}>{description}</p>
                <a className='btn primary-btn' href={link}>View project</a>
            </div>
        )
    
}

const Projects = props => {
    
        return(
            <div>
                <div>
                <hr/>
                <h2>Highlight Projects</h2>
                </div>  
                {
                    PROJECTS.map((PROJECT)=>{
                    return (
                    <Project key={PROJECT.id} project ={PROJECT}/>
                    )
                    })
                }
            </div>
        )
}

export default Projects;
