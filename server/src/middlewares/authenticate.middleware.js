import { APIError, verifyToken } from "../utils/index.util.js";

const authenticate =
  (allowRoles = []) =>
  (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return next(new APIError(401, "Authorization header missing"));
    }

    const [schema, token] = authorization.split(" ");

    if (schema !== "Bearer" || !token) {
      return next(new APIError(401, "Invalid authorization format"));
    }

    try {
      const payload = verifyToken(token);

      if (!payload?.userId || !payload?.role) {
        return next(new APIError(401, "Invalid token payload"));
      }

      if (allowRoles.length > 0 && !allowRoles.includes(payload.role)) {
        return next(new APIError(403, "Access denied"));
      }

      req.user = {
        userId: payload.userId,
        role: payload.role,
      };

      next();
    } catch (error) {
      return next(new APIError(401, "Invalid or expired token"));
    }
  };

export default authenticate;
