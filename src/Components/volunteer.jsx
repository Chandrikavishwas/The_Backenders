
import '../styles/volunteer.css'; 
import Chandrika from "../images/volunteers/Chandrika.jpg"
import Harsha from "../images/volunteers/Harsha.jpg"
import Shiv from '../images/volunteers/Shiv.jpg'
import Uma from "../images/volunteers/Uma.jpg"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const VolunteerPage = () => {
  const teamMembers = [
    {
      name: "Chandrika",
      imageUrl: Chandrika,
      
    },
    {
      name: "Shiv Sahni",
      imageUrl: Shiv,
      
    },
    {
      name: "Uma Sharma",
      imageUrl:Uma,
      
    },
    {
      name:"Harsha Vardhan",
      imageUrl:Harsha,
    }
  ];

  useEffect(() => {
      Aos.init();
    }, []);

  return (
    <div className="volunteer-page" data-aos="fade-in" data-aos-delay="300">
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