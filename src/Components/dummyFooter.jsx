import "../styles/footer.css";
import imglogo from "../images/old-Logo/COPY_a_a_b_h_a_r__2_-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const DummyFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className="footerContainer">
      <div className="logoSection">
        <img src={imglogo} className="logo" />
        <p className="tagline">
          Empowering dreams, one contribution at a time.
        </p>
      </div>
      <div className="linksSection">
        <div>
          <h4 className="heading">Quick Links</h4>
          <ul className="list">
            <li className="listItem">
              <a className="link">
                About Us
              </a>
            </li>
            <li className="listItem">
              <a className="link">
                Raise
              </a>
            </li>
            <li className="listItem">
                <a className="link">
                  Contact
                </a>
              
            </li>
          </ul>
        </div>
        <div>
          <h4 className="heading">Support</h4>
          <ul className="list">
            <li className="listItem">
              <a onClick={()=> navigate("/term&condition")} className="link">
                FAQs
              </a>
            </li>
            <li className="listItem">
              <a onClick={()=> navigate("/term&condition")} className="link">
                Terms & Conditions
              </a>
            </li>
            <li className="listItem">
              <a onClick={()=> navigate("/term&condition")} className="link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="socialSection">
        <h4 className="heading">Follow Us</h4>
        <div className="socialLinks">
          <a href="https://facebook.com" className="socialLink">
            <i className="fab fa-facebook"></i> <p className = "socialLink">Facebook</p>

          </a>
          <a href="https://twitter.com" className="socialLink">
            <i className="fab fa-twitter"></i> <p className = "socialLink">Twitter</p>

          </a>
          <a href="https://instagram.com" className="socialLink">
            <i className="fab fa-instagram"></i> <p className = "socialLink">Instagram</p>
          </a>
        </div>
      </div>
      <div className="bottomBar">
        <p className="bottomText">
          &copy; {new Date().getFullYear()} Aabhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DummyFooter;
