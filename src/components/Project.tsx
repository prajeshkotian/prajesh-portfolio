import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from './../assets/images/mock11.png'
import '../assets/styles/Project.scss';

import {data} from './../config'

const imageMap=[mock01,mock02,mock03,mock11]

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {(data?.projects || []).map((item, index)=>(
                <div className="project">
                <a href={item?.url} target="_blank" rel="noreferrer"><img src={imageMap[index]} className="zoom" alt="thumbnail" width="100%" height="50%"/></a>
                <a href={item?.url} target="_blank" rel="noreferrer"><h2>{item?.title}</h2></a>
                <p>{item?.description}</p>
            </div>
            ))}
        </div>
    </div>
    );
}

export default Project;