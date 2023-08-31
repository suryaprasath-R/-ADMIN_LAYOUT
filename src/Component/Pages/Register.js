import React from "react";
import { useNavigate } from "react-router-dom";


export function Register() {
  const navigate = useNavigate();

  return (
    <div className="container login-container">
      <section className="forget text-center">
        <div className="image-register"></div>
        <div className="content-register">
          <h4 className="register-head">Create An Account!</h4>
          <div className="login-inputs">
            <form>
              <div className="form-box-name">
                <div className="fname-head-login">
                  <div className="input-group mb-3 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name" />
                  </div>
                  <div className="input-group mb-3 ms-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name" />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the mail adress" />
                </div>
                <div className="fname-head-login">
                  <div className="input-group mb-3 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password" />
                  </div>
                  <div className="input-group mb-3 ms-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Repeat Password" />
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Register
                  </a>
                  <a
                    className="btn btn-danger btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Register with Google
                  </a>
                  <a
                    className="btn btn-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Register with Facebook
                  </a>
                </div>
                <div className="mt-3">
                  <a className="text-decoration-none " href="#">
                    Forgot password ?
                  </a>
                </div>
                <div className="mt-2">
                  <a className="text-decoration-none" href="#">
                    Already have An Account ? Login !
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