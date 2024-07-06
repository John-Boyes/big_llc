import React from 'react';
import Project from '../data/projects';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

function ProjectsIntro() {
  const previewProjects = Project.slice(0,4);

  return (
    <div className='flex flex-col scroll-p-8'>
      <p className="text-xl font-bold text-left py-4">Previous Projects</p>

      <div className='flex flex-col md:flex-row items-center justify-center scroll-p-8 mx-6'>
        
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
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

        <div>
          <Link to="/Projects" class="inline-block text-md px-8 py-2 rounded
           text-black bg-teal-400 shadow-sm shadow-stone-900
            hover:border-transparent hover:text-gray-900 hover:bg-teal-500 mt-4 lg:mt-0">View All Projects</Link>
        </div>
          
    </div>
  )
}

export default ProjectsIntro