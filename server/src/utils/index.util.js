import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary is configured in config/cloudinary.js, just import the instance
import "../config/cloudinary.js";

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
export class APIError extends Error {
  constructor(statusCode, message, error, stack) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const successResponse = (
  res,
  statusCode = 200,
  message = "Success",
  data = {},
) => {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
};

export const cookie = {
  getOptions() {
    return {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 12 * 60 * 60 * 1000,
    };
  },
  setCookie(res, name, value, options) {
    res.cookie(name, value, { ...this.getOptions(), ...options });
  },
  getCookie(req, name) {
    return req.cookies[name];
  },
  clearCookie(res, name) {
    res.clearCookie(name, this.getOptions());
  },
};

export const uploadToCloudinary = async (fileBuffer, folder) => {
  try {
    console.log("uploadToCloudinary called with folder:", folder);
    console.log("Cloudinary config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY ? "SET" : "NOT SET",
      api_secret: process.env.CLOUDINARY_API_SECRET ? "SET" : "NOT SET",
    });

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(new Error("Cloudinary upload failed: " + error.message));
          } else {
            console.log("✓ Cloudinary upload successful");
            console.log("Result:", result);
            // Use secure_url directly from Cloudinary result
            const url = result.secure_url;
            console.log("Avatar URL from secure_url:", url);
            resolve({ public_id: result.public_id, url });
          }
        },
      );

      uploadStream.end(fileBuffer);
    });
  } catch (error) {
    console.error("Cloudinary upload error (outer):", error);
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};
