import React from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


export function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <div className="container forgetpassword-container">
      <section className="forget text-center">
        <div className="image"></div>
        <div className="content">
          <h4>Forgot Your Password?</h4>
          <p className="card-info">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p>
          <div>
            <div className="d-grid gap-1">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="forget-form"
                    type="email"
                    placeholder="Enter Email Address" />
                </Form.Group>
              </Form>

              <a
                className="btn btn-primary btn-user btn-block forget-form"
                onClick={() => navigate("/dashboard")}
              >
                Reset Password
              </a>
            </div>
            <div>
              <div className="new-account-foger-form">
                <div className="createAcoount">Create an Account!</div>
                <div className="createAcoount">Already have an Account.?</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


//.....
