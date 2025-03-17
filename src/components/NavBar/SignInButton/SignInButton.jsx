import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "../../Modal/Modal";
import LoginForm from "../../Forms/LoginForm/LoginForm";

import "./signInButton.css";

export default function SignInButton() {
  const navigate = useNavigate();
  const isInLandingPage = location.pathname === "/";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSucces = (userData) => {
    console.log(userData);
    closeModal();

    //Add here more logic to handle after the login success
  };
  return (
    <>
      {isInLandingPage && (
        <button onClick={openModal} className="signIn-button">
          Sign In
        </button>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm onLoginSuccess={handleLoginSucces} onCancel={closeModal} />
      </Modal>
    </>
  );
}
