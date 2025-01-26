import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import {data} from './../config'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQFJVtgA6Y-czg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517814566374?e=1743033600&v=beta&t=O_FvH9YLIXMYDwOHKnc4h9Rq7YxP-xzv8THXr2RU1ec" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={data?.githubUrl || ''} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={data?.linkedinUrl || ''} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{data?.name || 'Prajesh Kotian'}</h1>
          <p>{data?.designation || 'Software Engineer'}</p>
          <p>{data?.education || 'George Mason University'}</p>
          <p>{data?.location || 'United States of America'}</p>
          <p className="about">{data?.about || 'Learn about me'}</p>

          

          <div className="mobile_social_icons">
            <a href={data?.githubUrl || ''} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={data?.linkedinUrl || ''} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;