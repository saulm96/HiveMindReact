import { useState } from "react";

import {login} from "../../../services/authService.js"

import "./loginForm.css";

export default function LoginForm({ onLoginSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    //Logic to call the api here inside a try cactch block
    try {
      const userData = await login(formData.email, formData.password);
      onLoginSuccess(userData);
    } catch (error) {
      setError(error.message || "Login Failedm Please try again.");
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-wrapper">
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="email-holder">
          <input
            className="signIn-form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="password-holder">
          <input
            className="signIn-form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            suggested="current-password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
