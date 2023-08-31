import React from "react";
import { useNavigate } from "react-router-dom";


export function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="container login-container">
      <section className="forget text-center">
        <div className="image-login"></div>
        <div className="content-login">
          <h4 className="loginhead">Welcome Back!</h4>
          <div>
            <form>
              <div className="form-box">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the mail adress" />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password" />
                </div>

                <div className="message">
                  <input className="login-checkbox" type="checkbox" />
                  Remember me
                </div>

                <div className="d-grid gap-2">
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login
                  </a>
                  <a
                    className="btn btn-danger btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login with Google
                  </a>
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login with Facebook
                  </a>
                </div>
                <div className="mt-3">
                  <a className="text-decoration-none " href="#">
                    Forgot password ?
                  </a>
                </div>
                <div className="mt-2">
                  <a className="text-decoration-none" href="#">
                    Create An Account !
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


//......
