import React from "react";
import { useNavigate } from "react-router-dom";


export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="text-center mt-5">
          <div className="error mx-auto" data-text="404">
            404
          </div>
          <p className="lead text-gray-800 mb-5 mt-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <a className="color-primary cursor-pointer" onClick={() => navigate("/dashboard")}>← Back to Dashboard</a>
        </div>
      </div>
    </>
  );
}



//.....