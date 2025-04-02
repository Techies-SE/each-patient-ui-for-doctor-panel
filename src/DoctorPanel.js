import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <div className="logo-circle"></div>
      <div className="logo-text">
        <span className="mfu-text">MFU</span> <span className="wellness-text">Wellness Center</span>
      </div>
    </div>
    <div className="navbar-right">
      <button className="notification-btn">
        <FontAwesomeIcon icon={faBell} className="icon" />
      </button>
      <div className="profile">
        <img src="/img/profile.png" alt="Profile" className="profile-image" />
        <span className="profile-name">Dr. Smith</span>
      </div>
    </div>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-container">
      <button className="sidebar-btn">
        <img src="/img/ChartLineUp.png" alt="Dashboard" className="sidebar-icon" /> Dashboard
      </button>
      <button className="sidebar-btn">
        <img src="/img/UsersThree.png" alt="Patients" className="sidebar-icon" /> Patients
      </button>
      <button className="sidebar-btn">
        <img src="/img/Calendar.png" alt="Calendar" className="sidebar-icon" /> Calendar
      </button>
    </div>
    <button className="sidebar-btn logout">
      <img src="/img/material-symbols_logout.png" alt="Logout" className="sidebar-icon" /> Logout
    </button>
  </aside>
);

const PatientHeader = () => (
  <div className="patient-header">
    <div className="patient-info">
      <h2>Som Chai</h2>
      <p>Male, 32 years | HN-Number: #000000001</p>
    </div>
    <button className="new-recommendation-btn">
      <img src="/img/Plus.png" alt="Recommendation" className="recommendation-icon" />
      <span>New Recommendation</span>
    </button>
  </div>
);

const HealthStats = () => (
  <div className="health-stats">
    {[
      { title: "Blood Pressure", value: "120/80 mmHg", status: "Normal" },
      { title: "Heart Rate", value: "72 bpm", status: "Normal" },
      { title: "Blood Sugar", value: "95 mg/dL", status: "High" }
    ].map((stat, index) => (
      <div className="health-card" key={index}>
        <h3>{stat.title}</h3>
        <p className="measurement">{stat.value}</p>
        <p className={`status ${stat.status.toLowerCase()}`}>{stat.status}</p>
      </div>
    ))}
  </div>
);

const LabResults = () => (
  <div className="latest-lab">
    <h3>Latest Lab Results</h3>
    {[
      { title: "CBC", details: ["Hemoglobin: 14 g/dL", "White Blood Cells: 6,000 /μL", "Platelets: 250,000 /μL"] },
      { title: "Glucose Levels", details: ["Fasting Blood Sugar: 95 mg/dL", "Postprandial Glucose: 120 mg/dL"] },
      { title: "Lipid Profile", details: ["Cholesterol: 180 mg/dL", "LDL: 100 mg/dL", "HDL: 50 mg/dL", "Triglycerides: 130 mg/dL"] }
    ].map((lab, index) => (
      <div className="lab-card" key={index}>
        <input type="checkbox" id={`${lab.title.toLowerCase()}-toggle`} className="lab-checkbox" />
        <label htmlFor={`${lab.title.toLowerCase()}-toggle`} className="lab-toggle">
          {lab.title} <span className="arrow"></span>
        </label>
        <div className="lab-details">
          {lab.details.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const AIRecommendation = () => (
  <div className="ai-recommendation-container">
    <div className="ai-recommendation">
      <h3>AI Recommendation</h3>
      <p>We recommend adjusting the patient’s diet to lower blood sugar levels.</p>
      <div className="button-group">
        <button className="accept-btn">Accept & Send</button>
        <button className="modify-btn">Modify</button>
      </div>
    </div>
    <div className="previous-messages">
      <h3>Previously Sent Messages</h3>
      <p>No previous recommendations sent.</p>
    </div>
  </div>
);

const DoctorPanel = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <PatientHeader />
        <HealthStats />
        <div className="lab-ai-section">
          <LabResults />
          <AIRecommendation />
        </div>
      </div>
    </div>
  );
};

export default DoctorPanel;
