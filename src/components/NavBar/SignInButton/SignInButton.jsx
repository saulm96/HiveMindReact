import { useNavigate, useLocation } from "react-router-dom";
import "./signInButton.css";

export default function SignInButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const isInAuthFormPage = location.pathname === "/auth";
  return (
    <>
      {!isInAuthFormPage && (
      <button
      onClick={() => {
        navigate("/auth");
      }}
      className="signIn-button"
      >
        Sign In
      </button>
      )}
    </>
  );
}
