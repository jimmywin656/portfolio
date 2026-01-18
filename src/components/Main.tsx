import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jimmywin656" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jimmyn6565" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`${process.env.PUBLIC_URL}/docs/resume.pdf`} target="_blank" rel="noreferrer"><DescriptionIcon/></a>
          </div>
          <h1>Jimmy Nguyen</h1>
          <p>IT / Data Analyst | Software & Automation Skills</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jimmywin656" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jimmyn6565" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`${process.env.PUBLIC_URL}/docs/ml_4200_report.pdf`} target="_blank" rel="noreferrer"><DescriptionIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;