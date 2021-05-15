import React from "react";
import Layout from "../components/layout";

const About = () => {
  const email = process.env.EMAIL;
  const phone_number = process.env.PHONE_NUMBER;
  const linkedIn = process.env.LINKEDIN;
  const github = process.env.GITHUB;
  const intro = process.env.INTRO;
  const experience = process.env.EXPERIENCE;

  return (
    <>
      <Layout>
        <section
          style={{
            backgroundColor: "skyblue",
            color: "whitesmoke",
            borderRadius: "0.5em",
            padding: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="contact-detail">
            <p> Email: {email} </p>
          </div>
          <div>
            <p>Phone: {phone_number} </p>
          </div>
          <div>
            <p>
              LinkedIn: <a href={linkedIn}>{linkedIn}</a>{" "}
            </p>
          </div>
          <div>
            <p>
              Github: <a href={github}>{github}</a>{" "}
            </p>
          </div>
          <hr
            style={{
              padding: "2px",
              border: "2px solid whitesmoke",
              borderRadius: "2px",
              marginTop: "0px",
              color: "whitesmoke",
            }}
          ></hr>
          <article>
            <h2>INTRODUCTION</h2>
            <p style={{ padding: "0.5em" }}>{intro}</p>
            <h2>EXPERIENCE</h2>
            <p style={{ padding: "0.5em" }}>{experience}</p>
            <h2>STACK</h2>
            <p>
              <ul style={{ display: "flex", listStyleType: "none" }}>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://javascript.org">JavaScript</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://reactjs.org">ReactJs</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://nodejs.org">NodeJs</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://expressjs.org">ExpressJs</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://nextjs.org">NextJs</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://mongodb.org">MongoDB</a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://postgressql.org">Postgres</a>
                </li>
              </ul>
            </p>
            <h2>Projects / Contributions</h2>
            <p>
              Listed here below are some projects I have contributed to both
              personal side projects and team collaboration.
              <ul style={{ display: "flex", listStyleType: "none" }}>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://github.com/muslimbuilders/halaqaat-server/blob/master/controllers/eventController.js  ">
                    MuslimBuilders
                  </a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://github.com/kennie-larkson/thesupercoderproject1 ">
                    TheSuperCoderProject
                  </a>
                </li>
                <li style={{ padding: "0.5em" }}>
                  <a href="https://github.com/kennie-larkson/apis-Joi-validation/blob/master/index.js ">
                    Backend Form Field Validation
                  </a>
                </li>
              </ul>
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default About;
