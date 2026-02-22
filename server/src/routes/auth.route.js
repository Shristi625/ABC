import { Router } from "express";
import passport from "passport";
import { authRateLimiter } from "../middlewares/rate-limiting.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import {
  signUpValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import validateRequest from "../middlewares/validate-request.middleware.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import {
  signUpController,
  loginController,
  logoutController,
  googleAuthController,
} from "../controllers/auth.controller.js";

const router = Router();

router
  .route("/sign-up")
  .post(
    authRateLimiter,
    signUpValidator,
    validateRequest,
    asyncHandler(signUpController)
  );

router
  .route("/login")
  .post(
    authRateLimiter,
    loginValidator,
    validateRequest,
    asyncHandler(loginController)
  );

router
  .route("/logout")
  .post(authRateLimiter, authenticate(), asyncHandler(logoutController));

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/google/callback").get(
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5175"}/login`,
    session: false,
  }),
  asyncHandler(googleAuthController)
);

export default router;
