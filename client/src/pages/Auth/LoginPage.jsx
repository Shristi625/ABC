// src/components/pages/Login/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { googleSignup, login } from "../../services/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showToast = (message, type = "error") => {
    alert(`${type === "success" ? "✅" : "⚠️"} ${message}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Please fill in both email and password fields.");
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        email,
        password,
        rememberMe,
      };

      const response = await login(payload);

      showToast("Login successful!", "success");

      localStorage.setItem("token", response.data.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.data.userId,
          fullName: response.data.data.fullName,
          email: response.data.data.email,
        }),
      );

      navigate("/dashboard");

      setEmail("");
      setPassword("");
      setRememberMe(false);
    } catch (error) {
      const apiError = error.response?.data;
      let errorMessage =
        apiError?.message || "Login failed. Please check your credentials.";

      if (apiError?.error && Array.isArray(apiError.error)) {
        const details = apiError.error
          .map((err) => `${err.path || err.param}: ${err.msg}`)
          .join("\n");
        errorMessage += `\n\nDetails:\n${details}`;
      }

      showToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    googleSignup();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showToast(
      "Password reset instructions will be sent to your email.",
      "info",
    );
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left section - Nepal travel image */}
        <div className="image-section">
          <div className="image-overlay"></div>
          <div className="image-content">
            <Link to="/" className="app-brand">
              <div className="logo-img">
                <img src="/logo/travel-remove.png" alt="Travel Logo" />
              </div>
              <span className="brand-name">Travel Diaries</span>
            </Link>
            <div className="image-text">
              <h1 className="image-title">Discover Nepal's Hidden Treasures</h1>
              <p className="image-description">
                From the high Himalayas to ancient sacred temples, capture and
                relive every magical moment of your journey.
              </p>
              <div className="location-tag">
                <span className="location-icon">📍</span>
                <span className="location-text">
                  Annapurna Base Camp, Nepal
                </span>
              </div>
            </div>
            <div className="image-stats">
              <div className="stat">
                <span className="stat-number">5k+</span>
                <span className="stat-label">Diaries</span>
              </div>
              <div className="stat">
                <span className="stat-number">1k+</span>
                <span className="stat-label">Explorers</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Authentic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Login form */}
        <div className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h1 className="form-title">Welcome Back to Travel Diaries</h1>
              <p className="form-subtitle">
                Continue your journey across Nepal
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-label-row">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <a
                    href="#"
                    className="forgot-password-link"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.88 9.88C9.58525 10.1544 9.34903 10.4858 9.1856 10.8538C9.02217 11.2218 8.93488 11.6188 8.92907 12.0211C8.92326 12.4233 8.99908 12.8225 9.15172 13.1945C9.30437 13.5665 9.53047 13.9036 9.816 14.185C10.1015 14.4665 10.4405 14.6867 10.812 14.8327C11.1834 14.9787 11.5795 15.0474 11.9783 15.0348C12.3771 15.0223 12.7695 14.9288 13.1306 14.7599C13.4917 14.5909 13.8139 14.3503 14.077 14.052"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.73 5.08C11.1513 5.02751 11.5755 5.00079 12 5C19 5 23 12 23 12C22.552 12.957 21.743 14.155 20.61 15.31"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.61 6.61C4.621 8.034 3 10 2 12C2 12 6 20 12 20C13.916 20 15.652 19.263 17.13 18.13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L23 23"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="remember-me">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">Remember me for 30 days</span>
                </label>
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Logging in...
                  </>
                ) : (
                  "Log In"
                )}
              </button>

              <div className="divider">
                <span className="divider-line"></span>
                <span className="divider-text">Or continue with</span>
                <span className="divider-line"></span>
              </div>

              <button
                type="button"
                className="google-button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <svg
                  className="google-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Login with Google
              </button>

              <div className="signup-link">
                Don't have an account?{" "}
                <Link to="/signup" className="signup-text">
                  Sign up
                </Link>
              </div>
            </form>

            <div className="form-footer">
              <p className="footer-text">
                By continuing, you agree to our{" "}
                <a href="#" className="footer-link">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
