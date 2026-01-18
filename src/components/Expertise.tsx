import React from "react";
import Chip from '@mui/material/Chip';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Windows",
    "MacOS",
    "Linux",
    "Active Directory",
    "Networking",
    "TCP/IP",
    "DNS",
    "DHCP",
    "Bash",
    "Powershell",
    "Git",
    "SQL",
    "Postman",
    "RDP",
    "Group Policy (GPO)"
];

const labelsSecond = [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "PostgreSQL",
    "Excel",
    "Jupyter",
    "Power BI",
    "Selenium",
];

const labelsThird = [
    "Python",
    "APIs",
    "Docker",
    "Github Actions",
    "Linux",
    "Shell scripting",
    "AWS",
    "GCP"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <ComputerIcon sx={{fontSize: 64}}/>
                    <h3>IT Systems</h3>
                    <p>I support and maintain reliable IT systems by troubleshooting hardware, software,
                        and network issues, automating routine tasks, and ensuring secure, well-documented environments.
                        I focus on improving system reliability, user productivity, and operational efficiency across teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <BarChartIcon sx={{fontSize: 64}}/>
                    <h3>Data Analysis</h3>
                    <p>I analyze, clean, and transform data to uncover insights that support business and operational decisions.
                        My work includes building queries, dashboards, and reports that translate raw data into clear, actionable information
                        for both technical and non-technical stakeholders.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <SettingsIcon sx={{fontSize: 64}}/>
                    <h3>DevOps & Automation</h3>
                    <p>I design scripts and lightweight tools to automate data collection, validation, and monitoring workflows.
                        By combining automation with analytical methods, I help reduce manual effort, improve data quality, and enable
                        proactive identification of trends and anomalies.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;