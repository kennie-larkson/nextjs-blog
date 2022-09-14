import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Body from "../components/body";

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <main> */}
      <Body>
        <section className="flex phone:container leading-normal font-mono hover:leading-loose">
          <div className="">
            <p className=" ">
              Hello, I'm <strong>Kennie</strong>, a software engineer 🤓 and
              this is my profile page. You can hang around to learn more about
              me.
              <br />
              You can also contact me on{" "}
              <a
                className="underline"
                href="https://twitter.com/kennie_larkson"
              >
                Twitter
              </a>{" "}
            </p>
            <p className=" ">
              This is my portfolio website - here I will make a showroom of my
              skills and services. I will write articles on the skills and
              technologies I work with so you may learn something while you hang
              out with me. Cool? 😎
            </p>
          </div>
        </section>
      </Body>
      {/* </main> */}
    </Layout>
  );
}
