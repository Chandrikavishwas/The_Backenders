import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../config/firebase.js";
import "../styles/raise.css";
import Navbar_Page from "../Components/navbar_page.jsx";
import Footer from "../Components/footer";
import RaiseContainer from "./raiseContainer.jsx";
import {
  Modal,
  ModalOverlay,
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import ChatBot from "./chatbot";

const Raise = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
   const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    reason: "",
    amount: "",
    context: "",
  });
  const [image, setImage] = useState(null);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const raiseRequestsRef = ref(db, "raiseRequests");

      const newRaiseRef = await push(raiseRequestsRef, {
        ...formData,
        imageName: image?.name || "No image uploaded",
        createdAt: new Date().toISOString(),
      });

      onOpen();
    } catch (error) {
      alert(`Error adding data: ${error.message}`);
    }

    setShowForm(false);
    setFormData({ reason: "", amount: "", context: "" });
    setImage(null);
    setShowPreview(false);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <>
      <Navbar_Page />
      <div className="raise-container">
        {!showForm ? (
          <button className="plus-button" onClick={handleButtonClick}>
           + Add Your Funding Request
          </button>
        ) : (
          <form className="details-form" onSubmit={handleSubmit}>
            <label>
              Funding Reason:
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Enter the reason for funding"
                required
              />
            </label>
            <label>
              Amount Needed:
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter the amount needed"
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="context"
                value={formData.context}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe your situation"
                required
              ></textarea>
            </label>
            <div
              className="drop-zone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {image ? (
                <p>{image.name}</p>
              ) : (
                <p>Drag an image here to upload</p>
              )}
            </div>
            <button className="submitbutton" type="submit">
              Submit
            </button>
            <button
              className="preview-button"
              type="button"
              onClick={handlePreview}
            >
              Live Preview
            </button>
          </form>
        )}

        {showPreview && (
          <div className="preview-card">
            <button className="close-button" onClick={closePreview}>
              &times;
            </button>
            <h3>Preview of Your Request</h3>
            {image && (
              <div>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="preview-image"
                />
              </div>
            )}
            <div className="progress-bar">
              <div className="progress" style={{ width: "30%" }}></div>
            </div>
            <p className="raised-goal">
              <span className="raised">Raised: ₹0</span>
              <span className="goal">Goal: ₹{formData.amount}</span>
            </p>
            <p>
              <strong style={{color:"white"}}>{formData.reason}</strong>
            </p>

            <p>{formData.context}</p>
          </div>
        )}
      </div>
      <RaiseContainer/>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Successful</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="19px" textColor="green">Your data was submitted successfully!</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ChatBot/>
    </>
  );
};



export default Raise;
