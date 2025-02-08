import Navbar_page from "../Components/navbar_page"
import '../styles/about.css';    
import Footer from "../Components/footer"
import Volunteer from "../Components/volunteer"
import { useNavigate } from "react-router-dom";
import Comment from "../Components/comment";
import AboutBox from "./aboutBox";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar_page/>
      <main className="about-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Empowering Change Through Crowdfunding</h1>
            <p>Raise funds for various causes, projects, or startups easily and effectively with our seamless crowdfunding platform.</p>
          </div>
        </section>
        <section className="about-content">
          <div className="content">
            <h2>What We Do </h2>
            <p>Our platform enables individuals and organizations to raise funds for causes, projects, and startups by gathering donations from a broad audience. We believe in the power of collective action and the impact of empowering individuals to take the initiative and create change.</p>
            <p>With our easy-to-use platform, you can:</p>            
            <AboutBox/>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Start Your Campaign Today!</h2>
            <p>Join thousands of successful campaigns on our platform. It’s easy to get started!</p>
            <button className="cta-button" onClick={()=> navigate('/donate')}>Start Fundraising</button>
          </div>
        </section>
      </main>
      <Comment/>
      <Volunteer/>
        <Footer/>
    </>
  );
};

export default About;
