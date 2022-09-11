import { useState, useEffect } from "react";

import Layout from "../components/layout";
import Body from "../components/body";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Layout form>
        <Body>
        <form
          name="membership-form"
          method="POST"
          action="/signupform?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="membership-form" value="membership-form" />
          <div className="">
            {success && <p>Successfully submitted form!</p>}
            <h5>Please fill the form below</h5>
            <div className="">
              <label htmlFor="fname">Username:</label>
              <input
                type="text"
                className=""
                id="fname"
                name="fname"
                maxLength="30"
                onChange={handleUsername}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input
                type="text"
                className=""
                id="fname"
                name="fname"
                maxLength="30"
                onChange={handleFname}
                required
              />
            </div>
            <div className="">
              <label htmlFor="lname">Last Name:</label>
              <input
                type="text"
                className=""
                id="lname"
                name="lname"
                maxLength="30"
                onChange={handleLname}
                required
              />
            </div>
            <div className="">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className=""
                id="email"
                name="email"
                maxLength="30"
                onChange={handleEmail}
                required
              />

              <span>
                We will not disclose your personal information to any third
                parties without your consent
              </span>
            </div>

            <div className="">
              <label>
                <input type="" /> Remember me
              </label>
            </div>
            {username && fname && lname && email && (
              <button type="submit" className="">
                Submit
              </button>
            )}
          </div>
        </form>
        </Body>
      </Layout>
    </>
  );
};

export default SignupForm;

// setTimeout(() => {
//   return <p style={{ color: "green" }}>Successfully submitted form!</p>;
// }, 5000);
