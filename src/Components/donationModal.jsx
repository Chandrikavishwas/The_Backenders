import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useToast,
} from "@chakra-ui/react";

const DonationModal = ({ isOpen, onClose, onDonate }) => {
    const [amount, setAmount] = useState('');
    const toast = useToast(); 

    const handleDonateClick = () => {
        const donationAmount = parseFloat(amount);
        if (!isNaN(donationAmount) && donationAmount > 0) {
            onDonate(donationAmount);
            setAmount('');
            toast({
                title: "Thank you for your donation!",
                description: `You donated ₹${donationAmount}.`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose();
        } else {
            toast({
                title: "Invalid Amount",
                description: "Please enter a valid donation amount.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Donate to this Cause</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        type="number"
                        placeholder="Enter donation amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="teal" onClick={handleDonateClick}>
                        Donate
                    </Button>
                    <Button onClick={onClose} ml={3}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DonationModal;
