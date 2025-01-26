import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import {data} from './../config'

function Footer() {
  return (
    <footer>
      <div>
        <a href={data?.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={data?.linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed by Yuji Sato & built by <a href="https://github.com/prajeshkotian/react-portfolio-template" target="_blank" rel="noreferrer">Prajesh Kotian</a> with 💜</p>
    </footer>
  );
}

export default Footer;