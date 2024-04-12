import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error("Error caught by error boundary:", error, errorInfo);
      setError(error);
      setErrorInfo(errorInfo);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (error) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{error?.error?.message}</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
