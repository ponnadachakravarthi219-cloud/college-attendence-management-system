import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (
        formData.email === "admin@gmail.com" &&
        formData.password === "admin123"
      ) {
        setMessage("Login Successful");
        navigate("/dashboard");
      } else {
        setMessage("Invalid Email or Password");
      }
    }, 2000);
  };

  const clearForm = () => {
    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
    setMessage("");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Student Login</h2>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error">{errors.email}</span>
          )}

          <label>Password</label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <span className="error">{errors.password}</span>
          )}

          <div className="checkbox">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </div>

          <button type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={clearForm}
          >
            Clear
          </button>

          <p className="forgot">Forgot Password?</p>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;