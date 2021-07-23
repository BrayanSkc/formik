import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="container mt-md-5">
      <div className="row shadow-lg bg-white rounded">
        <div className="d-none d-md-block col-md-6 p-3">
          <img
            className="img-fluid w-100"
            src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000"
            alt="welcome"
          />
        </div>
        <div className="col-12 col-md-6 bg-primary">
          <div className="col-12 mx-auto py-5 d-flex align-items-center justify-content-center">
            <span className="text text-white font-weight-bold display-4">
              Welcome!
            </span>
          </div>
          <div className="col-12">
            <div className="input-group mb-4 borders-input">
              <div className="input-group-prepend">
                <span
                  className="input-group-text h-100 bg-white rounded-0 border-0"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="You're name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-4 borders-input">
              <div className="input-group-prepend">
                <span
                  className="input-group-text h-100 bg-white rounded-0 border-0"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="You're email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-4 borders-input">
              <div className="input-group-prepend">
                <span
                  className="input-group-text h-100 bg-white rounded-0 border-0"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Create a pass"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-12 py-4 mb-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="col-12 col-md-6 px-3 mb-3">
              <button className="d-block btn btn-warning text text-white w-100">
                Create account
              </button>
            </div>
            <div className="col-12 col-md-6 px-3 mb-3">
              <button className="d-block btn btn-warning text text-white w-100">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
