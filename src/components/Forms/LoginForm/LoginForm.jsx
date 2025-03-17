import { useState } from "react";
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
  };

  return (
    <div className="login-form-wrapper">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-holder">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johnDoe@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <div className="password-holder">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
