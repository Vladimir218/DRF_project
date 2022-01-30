import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const ProjectItem = ({project}) => {
   return (
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.repository}
                </td>
            </tr>
   )
}

const ProjectList = ({projects}) => {
    console.log({projects})
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Repository</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem project={project} />)}
            </tbody>
        </table>
    )
 }
 
 
 export default ProjectList