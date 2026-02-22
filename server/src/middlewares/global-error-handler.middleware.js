const globalErrorHandler = (err, req, res, next) => {
  console.error("Global Error Handler:", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: err.error || null,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default globalErrorHandler;
