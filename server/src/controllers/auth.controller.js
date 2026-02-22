import User from "../models/user.model.js";
import {
  APIError,
  cookie,
  generateToken,
  successResponse,
} from "../utils/index.util.js";

export const signUpController = async (req, res, next) => {
  const { fullName, email, password, role, privacy, travelTips } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return next(new APIError(409, "User already exists"));
  }

  const newUser = await User.create({
    fullName,
    email,
    password,
    role,
    privacy,
    travelTips,
  });

  const token = generateToken({
    userId: newUser._id,
    role: newUser.role,
  });

  cookie.setCookie(res, "token", token);

  successResponse(res, 201, "User registered successfully", {
    userId: newUser._id,
    email: newUser.email,
    fullName: newUser.fullName,
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new APIError(401, "Invalid email or password"));
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return next(new APIError(401, "Invalid email or password"));
  }

  const token = generateToken({
    userId: user._id,
    role: user.role,
  });

  cookie.setCookie(res, "token", token);

  successResponse(res, 200, "Login successful", {
    userId: user._id,
    email: user.email,
    fullName: user.fullName,
    token,
  });
};

export const logoutController = (req, res, next) => {
  cookie.clearCookie(res, "token");

  successResponse(res, 200, "Logout successful");
};

export const googleAuthController = async (req, res, next) => {
  const user = req.user;
  console.log(user);

  if (!user) {
    return next(new APIError(401, "Google authentication failed"));
  }

  const token = generateToken({
    userId: user._id,
    role: user.role,
  });

  cookie.setCookie(res, "token", token);

  const userData = encodeURIComponent(
    JSON.stringify({
      id: user._id,
      fullName: user.fullName || user.displayName,
      email: user.email,
    })
  );

  return res.redirect(
    `${process.env.FRONTEND_URL || "http://localhost:5173"}/dashboard?token=${token}&user=${userData}`
  );
};
