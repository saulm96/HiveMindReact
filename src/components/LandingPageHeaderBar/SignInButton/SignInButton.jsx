import { useState } from "react";

import Modal from "../../Modal/Modal";
import LoginForm from "../../Forms/LoginForm/LoginForm";

import "./signInButton.css";

export default function SignInButton() {
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
      <button onClick={openModal} className="signIn-button">
        Sign In
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="signIn-modal-title-container">
          <h2 className="signIn-modal-title">Welcome to HiveMind</h2>
          <p className="signIn-modal-subtitle">
            Sign in or create a new account
          </p>
          <div className="toggle-form-container">
            <div className="toggle-text-divider">
              <p className="signIn-toggle-text -login">Login</p>
            </div>
            <div className="toggle-text-divider">
              <p className="signIn-toggle-text -register">Register</p>
            </div>
          </div>
        </div>
        <LoginForm onLoginSuccess={handleLoginSucces} onCancel={closeModal} />
      </Modal>
    </>
  );
}
