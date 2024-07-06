import React from 'react';
import Project from '../data/projects';
import ProjectItem from './ProjectItem'

function ProjectsIntro() {
  const previewProjects = Project.slice(0,3);

  return (
    <div className='flex flex-col scroll-p-8'>
      <p className="text-xl font-bold text-left">Previous Projects</p>

      <div className='flex justify-center'>
        <p className="text-md max-w-xl">
            Click on a Project Card below for additional information
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center scroll-p-8 mx-6'>
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
              {previewProjects.map(project => (
                <ProjectItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                blurb={project.blurb}
                className='shadow-sm shadow-stone-900'
                />    
              ))}
          </div>
      </div>
    </div>
  )
}

export default ProjectsIntro