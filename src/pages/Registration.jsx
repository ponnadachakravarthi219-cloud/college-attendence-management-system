import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    department: "",
    year: "",
    rollNo: "",
    dob: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile Number must contain 10 digits";
    }

    if (!formData.gender) {
      newErrors.gender = "Select Gender";
    }

    if (!formData.department) {
      newErrors.department = "Select Department";
    }

    if (!formData.year) {
      newErrors.year = "Select Year";
    }

    if (!formData.rollNo.trim()) {
      newErrors.rollNo = "Roll Number is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Select Date of Birth";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "Accept Terms & Conditions";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSubmittedData(formData);
      setSuccessMessage("Registration Successful!");

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        gender: "",
        department: "",
        year: "",
        rollNo: "",
        dob: "",
        address: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      gender: "",
      department: "",
      year: "",
      rollNo: "",
      dob: "",
      address: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

    setErrors({});
    setSuccessMessage("");
    setSubmittedData(null);
  };

  const passwordStrength = () => {
    if (formData.password.length === 0) return "";
    if (formData.password.length < 6) return "Weak";
    if (formData.password.length < 10) return "Medium";
    return "Strong";
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Student Registration Form</h2>

        {successMessage && (
          <p className="success">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
                      <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>Gender</label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>
              <option>CIVIL</option>
            </select>

            {errors.department && (
              <span className="error">{errors.department}</span>
            )}
          </div>

          <div className="form-group">
            <label>Year</label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>

            {errors.year && <span className="error">{errors.year}</span>}
          </div>

          <div className="form-group">
            <label>Roll Number</label>

            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter Roll Number"
            />

            {errors.rollNo && <span className="error">{errors.rollNo}</span>}
          </div>

          <div className="form-group">
            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
            />

            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />

            <small>Password Strength: {passwordStrength()}</small>

            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />

            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              I Accept Terms & Conditions
            </label>

            {errors.terms && <span className="error">{errors.terms}</span>}
          </div>

          <div className="button-group">
            <button type="submit">Register</button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
                {submittedData && (
          <div className="submitted-data">
            <h3>Submitted Details</h3>

            <p><strong>Name:</strong> {submittedData.fullName}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Mobile:</strong> {submittedData.mobile}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Department:</strong> {submittedData.department}</p>
            <p><strong>Year:</strong> {submittedData.year}</p>
            <p><strong>Roll Number:</strong> {submittedData.rollNo}</p>
            <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Registration;