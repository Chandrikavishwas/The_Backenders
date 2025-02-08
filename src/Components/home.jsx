import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/home.css";
import { useState } from "react";
import content1img1 from "../images/content1img1.webp";
import content1img2 from "../images/content1img2.webp";
import content1img3 from "../images/content1img3.webp";
import content1 from "../images/content2.webp";
import content3 from "../images/content3.webp";
import Footer from "./footer";
import VolunteerPage from "./volunteer";
import News from "./news";
import ReactModal from "react-modal"

ReactModal.setAppElement('#root');
const Home = () => {
  const [isVideo, setIsVideo] = useState(false);
  
    const openModal = () => {
      setIsVideo(true);
    };
  
    const closeModal = () => {
      setIsVideo(false);
    };
    const navigate = useNavigate()
  return (
    <>
      <div>
        <Navbar />
        <div className="slider">
          <div className="slider-content">
            <h3>Get Started Today</h3>
            <h1>Help the children When they need</h1>
            <p>
              With so much to consume and such little time, coming up <br />
              with relevant title ideas is essential
            </p>
            <Button onClick={()=> navigate("/about")}>Learn More</Button>
          </div>
        </div>
        <div className="content-1">
          <h1 className="content-1-h1">Reason of Helping</h1>
          <div className="content-1-part">
            <div>
              <img src={content1img1} />
              <div className="img1-content">
                <h1>Funds</h1>
                <p>
                Be part of the journey as we bring hope and change to lives in need.
                </p>
                <p>Read More...</p>
              </div>
            </div>
            <div>
              <img src={content1img2} />
              <div className="img1-content">
                <h1>Blood camp</h1>
                <p>
                By donating, you’re becoming a beacon of hope for those who need it most
                </p>
                <p>Read More...</p>
              </div>
            </div>
            <div>
              <img src={content1img3} />
              <div className="img1-content">
                <h1>Friendly Volunteer</h1>
                <p>
                Our friendly volunteers are the heart and soul of our mission.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-2">
          <div className="left-content2">
            <img src={content1} alt="img" />
            <button onClick={openModal} className="play-button">
              <i className="fa-solid fa-play" style={{ color:"white"}}></i>
            </button>
          <ReactModal
              isOpen={isVideo}
              onRequestClose={closeModal}
              contentLabel="Video Modal"
              className="modal"
              overlayClassName="overlay"
            >
            <button onClick={closeModal} className="close-modal-button"> ❌ </button>
              <iframe width="760" 
                height="515" 
                src="https://www.youtube.com/embed/Bh-DSY3OTgM?si=pX5ltAdBpoDg6tUp?autoplay=1" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </ReactModal>
          </div>
          <div className="right-content2">
            <h1 className="content-1-h2">Watch Our Latest Activities</h1>
            <p>
              Discover the impact your contributions are making by exploring our
              latest activities. From community outreach programs to
              life-changing initiatives, we’re committed to transparency and
              progress. At our crowdfunding platform, every action is a step
              closer to creating a better tomorrow. Watch how your support is
              driving change, one project at a time. Together, we can turn
              dreams into reality—let’s make a difference!
            </p>
            <p>
              Be part of the journey as we bring hope and change to lives in
              need. Explore our latest activities and see the difference your
              support is creating. From empowering communities to uplifting
              individuals, your contributions fuel impactful projects that
              matter. Watch, share, and continue to be the reason behind the
              smiles and successes we achieve together.
            </p>
            <Button p="23px" onClick={()=> navigate("/donate")}>Donate Now</Button>
          </div>
        </div>
        <div className="content-3">
          <img src={content3} alt="img" />
        </div>
      </div>
      <News />
      <VolunteerPage/>
      <Footer />
    </>
  );
};
export default Home;

