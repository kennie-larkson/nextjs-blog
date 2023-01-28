import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Body from "../components/body";
import SignupForm from "./../components/signupform";

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <main> */}
      <Body>
        <section className="flex flex-col phone:container bg-gray-50 text-justify py-2 px-3 rounded-sm font-mono leading-loose">
          <div className="">
            <p className=" ">
              Welcome to my personal website! My name is Kehinde Lawal, and I am
              a full stack web developer with over 3 years of experience. I
              specialize in using technologies such as JavaScript, Node.js,
              React, Express, TypeScript, NoSQL, SQL, Docker, and GIT Version
              Control to build dynamic, responsive, and efficient web
              applications. Throughout my career, I have worked on a wide range
              of projects, honing my skills in both front-end and back-end
              development. I am passionate about creating user-friendly,
              high-performance web experiences that help businesses and
              organizations achieve their goals. Thank you for visiting my
              website, and I look forward to connecting with you.
              {/* Hello, I'm <strong>Kennie</strong>, a software engineer 🤓 and
              this is my profile page. You can hang around to learn more about
              me.
              <br />
              You can also contact me on{" "}
              <a
                className="underline"
                href="https://twitter.com/kennie_larkson"
              >
                Twitter
              </a>{" "} */}
            </p>
            <p className=" ">
              This is my portfolio website - here I will make a showroom of my
              skills and services. I will write articles on the skills and
              technologies I work with so you may learn something while you hang
              out with me. Cool? 😎
            </p>
          </div>
        </section>
        <SignupForm />
      </Body>
      {/* </main> */}
    </Layout>
  );
}
