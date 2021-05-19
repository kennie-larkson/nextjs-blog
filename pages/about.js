import React from "react";
import Layout from "../components/layout";
import styles from "./about.module.css";

const About = () => {
  

  return (
    <>
      <Layout>
        <div
          className="container"
          style={{
            backgroundColor: "rgb(135, 206, 235)",
            color: "rgb(255, 255, 255)",
            padding: "0.5em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="row contacts">
           
              <div className="input-group input-group-sm">
                <span className="input-group-text">Email</span>
                <input
                  type="text"
                  aria-label="email"
                  className="form-control"
                  value="materialkenny@gmail.com"
                  disabled
                />
              </div>
           

            {/* <div className="col"> */}
              <div className="input-group input-group-sm">
                <span className="input-group-text">Phone</span>
                <input
                  type="text"
                  aria-label="phone_number"
                  className="form-control"
                  value="+2348179835065"
                  disabled
                />
              </div>
            {/* </div> */}
          </div>

          <article className="container" style={{
            backgroundColor: "antiquewhite",
            color: "black"
          }}>
            <p className={styles.intro}>
              <h3>INTRODUCTION</h3>I am{" "}
              <strong>Lawal, Abdulrafiu Kehinde</strong> a web developer and
              graduate of Electrical and Computer Engineering. I have skills in
              both frontend and backend of web technologies but I prefer to
              associate more with the backend.
            </p>

            <p className={styles.experience}>
              <h3>Experience </h3>
              In the last 5 years of my voyage in web development I have
              participated in several communities sponsored tech events most
              prominently the{" "}
              <strong>GrowWithGoogleAndAndela (2018 and 2019)</strong> where I
              learnt so much. I got the opportunity at a real team work during
              the last <strong>BuildForSDG2020</strong> where I was paired with
              a couple very smart developers and we obviously collaborated
              remotely using the git version control and this very experience
              took my skills to a new height.

              
              <h4>Stack</h4>
              <div><strong>JAVASCRIPT | NODEJS | EXPRESSJS | MONGODB | POSTGRES</strong></div>
            
            </p>

            <p className={styles.projects}>
              <h3>Projects</h3>
              Listed here below are some projects I have contributed to both
              personal side projects and team collaboration.
              <ul>
                <li>
                  <a href="https://github.com/muslimbuilders/halaqaat-server">MuslimBuilder Project</a>
                </li>
               
                <li><a href="https://github.com/kennie-larkson/thesupercoderproject1">The SupercoderProject</a></li>
                <li>
                  <a href="https://github.com/kennie-larkson/apis-Joi-validation">Backend Field Validation</a>
                </li>
              </ul>
            </p>

            
           
          </article>
        </div>
      </Layout>
    </>
  );
};

export default About;
