import React from "react";
import "./style.css"
import Projects from "../../projects"

export default function portfolio({projects}) {

    return (
        <div class="portfolio">
            <h1>Portfolio</h1>
            <div className="projectContainer">
                {Projects.map((project) => (
                    <div class="project-list-item card" key={project.id}>
                        <h3>{`${project.name}`}</h3>
                        <a class ="hide" href={`${project.url}`} target="blank">Github Repo</a>
                        <p class="hide">{`${project.highlight}`}</p>
                    </div>
                    
                ))}

            </div>
        </div>
    )
}