import React from "react";
import drugminer_v1 from '../assets/images/drugminer_v1.png';
import obj_detection from '../assets/images/drone_object_detection.webp';
import bcancer from '../assets/images/b-cancer.png';
import icebreak from '../assets/images/icebreak.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.cpp.edu/calsys/projects.shtml" target="_blank" rel="noreferrer"><img src={drugminer_v1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cpp.edu/calsys/projects.shtml" target="_blank" rel="noreferrer"><h2>Drug Miner</h2></a>
                <p>Maintained a dark web crawler to collect illicit drug data and developed a machine learning model to classify substances as illegal or not.
                    By integrating dark web data with AI, social network analysis, and criminological methods, the project supports predictive modeling of drug
                    trafficking trends and related violent activity to inform research, policy, and public safety.
                </p>
            </div>
            <div className="project">
                <a href="https://www.bronco-astra.com/tips" target="_blank" rel="noreferrer"><img src={obj_detection} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/CPP-Aerial-Vision-Analysis-System" target="_blank" rel="noreferrer"><h2>UAV Object Detection</h2></a>
                <p>Partnered with four other developers to develop and train a YOLO object detection model for mission-critical targets, implement mission lap logic, and 
                    integrate cross-team software within a ROS ecosystem.</p>
            </div>
            <div className="project">
                {/* host this on my own site somewhere evntually */}
                <a href={`${process.env.PUBLIC_URL}/docs/ml_4200_report.pdf`} target="_blank" rel="noreferrer"><img src={bcancer} className="zoom" alt="thumbnail" width="100%"/></a>        
                <a href="https://github.com/EdgarO27/ProjectML/tree/main" target="_blank" rel="noreferrer"><h2>Breast Cancer Detection</h2></a>
                <p>Developed a 4-layer convolutional neural network for breast cancer classification using histopathological images from the BreakHis dataset achieving
                    89.3% accracy and 94.4% precision in distinguishing malignant from benign tumors.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/cppsea/icebreaki" target="_blank" rel="noreferrer"><img src={icebreak} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/cppsea/icebreak" target="_blank" rel="noreferrer"><h2>Icebreak</h2></a>
                <p>Worked with the CPP SEA club to develop the app's backend routes. Icebreak acts a central hub for members to be updated on the school's latest events
                    while providing features to incentivize member growth.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;