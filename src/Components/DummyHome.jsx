import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DummyNavbar from "./DummyNavbar";
import News from "./news";
import "../styles/home.css";
import "aos/dist/aos.css";
import VolunteerPage from "./volunteer";
import imglogo1 from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";
import Carousel from "./Carousel";
import content1 from "../images/content2.webp";
import content3 from "../images/content3.webp";
import ReactModal from "react-modal";
import DummyFooter from "./dummyFooter";
import HomeCards from "./HomeCards";
import ChatBot from "./chatbot";
ReactModal.setAppElement("#root");

const MemoizedDummyNavbar = React.memo(DummyNavbar);
const MemoizedFooter = React.memo(DummyFooter);
const MemoizedNews = React.memo(News);

const DummyHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isVideo, setIsVideo] = useState(false);

  const openModal = () => {
    setIsVideo(true);
  };

  const closeModal = () => {
    setIsVideo(false);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <>
      <div>
        <MemoizedDummyNavbar />

        <div className="slider">
          <div
            className="slider-content"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <h3 data-aos="fade-in" data-aos-delay="300">
              Get Started Today
            </h3>
            <h1 data-aos="fade-in" data-aos-delay="300">
              Help the children When they need
            </h1>
            <p data-aos="fade-in" data-aos-delay="300">
              With so much to consume and such little time, coming up <br />
              with relevant title ideas is essential
            </p>
            <Button
              onClick={openModal}
              colorScheme="transparent"
              border="1px solid white"
              className="make-a-donate"
            >
              Learn More
            </Button>
          </div>
        </div>
        <HomeCards />
        <section className="content-1" data-aos="fade-in" data-aos-delay="100">
          <h1 className="content-1-h1">Reason of Helping</h1>
          <Carousel />
        </section>

        <section className="content-2" data-aos="fade-in" data-aos-delay="100">
          <div className="left-content2">
            <img src={content1} alt="img" />
            <button onClick={openModal} className="play-button">
              <i className="fa-solid fa-play"></i>
            </button>
            <ReactModal
              isOpen={isVideo}
              onRequestClose={closeModal}
              contentLabel="Video Modal"
              className="modal"
              overlayClassName="overlay"
            >
              <button onClick={closeModal} className="close-modal-button">
                {" "}
                ❌{" "}
              </button>
              <iframe
                width="760"
                height="515"
                src="https://www.youtube.com/embed/Bh-DSY3OTgM?si=pX5ltAdBpoDg6tUp?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </ReactModal>
          </div>
          <div
            className="right-content2"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <h1 className="content-1-h2">Watch Our Latest Activities</h1>
            <p>
              Discover the impact your contributions are making by exploring our
              latest activities. From community outreach programs to
              life-changing initiatives, we’re committed to transparency and
              progress. At our crowdfunding platform, every action is a step
              closer to creating a better tomorrow. Together, we can turn dreams
              into reality—let’s make a difference!
            </p>
            <p>
              Be part of the journey as we bring hope and change to lives in
              need. Explore our latest activities and see the difference your
              support is creating. From empowering communities to uplifting
              individuals, your contributions fuel impactful projects that
              matter.
            </p>
            <Button
              onClick={onOpen}
              colorScheme="transparent"
              border="1px solid white"
            >
              Make a Donation
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Sorry! <img src={imglogo1} alt="Logo" />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="17px">
                    To donate 💵, you need to login first.
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button onClick={handleLoginRedirect} colorScheme="teal">
                    Login
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </section>

        <section className="content-3">
          <img src={content3} alt="img" />
        </section>
      </div>
      <div className="lower-content" data-aos="fade-in" data-aos-delay="100">
        <MemoizedNews />
      </div>
      <div className="lower-content" data-aos="fade-in" data-aos-delay="100">
        <VolunteerPage />
      </div>
      <ChatBot/>
      <div className="lower-content" data-aos="fade-in" data-aos-delay="100">
        <MemoizedFooter />
      </div>
    </>
  );
};

export default DummyHome;
