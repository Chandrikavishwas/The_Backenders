import React from 'react';
import '../styles/volunteer.css'; 
import aditya from "../images/volunteers/aditya.jpeg"
import prachi from "../images/volunteers/prachi.jpg"
import shiv from '../images/volunteers/shiv.jpeg'

const VolunteerPage = () => {
  const teamMembers = [
    {
      name: "Aditya Kumar",
      imageUrl: aditya,
      
    },
    {
      name: "Shiv Sahni ₜₑₐₘ ₗₑₐ𝒹",
      imageUrl: shiv,
      
    },
    {
      name: "Prachi Sharma",
      imageUrl: prachi,
      
    },
  ];

  return (
    <div className="volunteer-page">
      <h2 className="title">Meet Our Volunteers</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <div className="social-links">
              <a  target="_blank">
                <i className="fab fa-linkedin" style={{color:"black"}}></i>
              </a>
              <a target="_blank">
                <i className="fab fa-twitter" style={{color:"black"}}></i>
              </a>
              <a target="_blank" >
                <i className="fab fa-instagram" style={{color:"black"}}></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;