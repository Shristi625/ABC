import { validationResult } from "express-validator";
import { APIError } from "../utils/index.util.js";

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new APIError(400, "Validation Error", errors.array()));
  }
  next();
};

export default validateRequest;
