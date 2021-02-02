import { useState, useEffect } from "react";

import Layout from "../components/layout";
import styles from "./signupform.module.css";

const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const handleFname = (e) => {
    setFname(e.target.value);
    if (e.target.value === "") {
      console.log("enter your first name please.");

      const warning = <div>Enter your first name please.</div>;
      return warning;
    }
  };
  console.log(fname);

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <>
      <Layout>
        {success && (
          <p style={{ color: "green" }}>Successfully submitted form!</p>
        )}
        <form
          name="membership-form"
          method="POST"
          // onSubmit={handleSubmit}
          action="/signupform?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="membership-form" value="membership-form" />
          <div className="container mt-4" style={{ maxWidth: "30rem" }}>
            <h5>Please fill the form below</h5>
            <div className="form-group">
              <label
                style={{ display: "block", marginBottom: "0.2rem" }}
                htmlFor="fname"
              >
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                maxLength="30"
                style={{ padding: "0.3rem", maxWidth: "50%" }}
                onChange={handleFname}
              />
              {!fname ? (
                <div style={{ fontSize: "12px", color: "red" }}>
                  Enter your first name please.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label
                htmlFor="lname"
                style={{ display: "block", marginBottom: "0.2rem" }}
              >
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lname"
                maxLength="30"
                style={{ padding: "0.3rem", maxWidth: "50%" }}
                onChange={handleLname}
              />
              {!lname ? (
                <div style={{ fontSize: "12px", color: "red" }}>
                  Enter your last name please.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "0.2rem" }}
              >
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                maxLength="30"
                style={{ padding: "0.3rem", maxWidth: "50%" }}
                onChange={handleEmail}
              />
              {!email ? (
                <div style={{ fontSize: "12px", color: "red" }}>
                  Enter your email please.
                </div>
              ) : (
                ""
              )}
              <span style={{ fontSize: "10px", color: "green" }}>
                We will not disclose your personal information to any third
                parties without your consent
              </span>
            </div>
            <div className="form-group">
              <label
                htmlFor="pwd"
                style={{ display: "block", marginBottom: "0.2rem" }}
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                name="pwd"
                maxLength="30"
                style={{ padding: "0.3rem", maxWidth: "50%" }}
                onChange={handlePwd}
              />
              {!pwd ? (
                <div style={{ fontSize: "12px", color: "red" }}>
                  Password cannot be empty please.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default SignupForm;
