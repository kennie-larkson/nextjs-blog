import Head from "next/head";
import Link from "next/link";

import styles from "../components/layout.module.css";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
// import Sidebar from "../components/sidebar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main
        className={styles.main}
        style={{ display: "flex", flexDirection: "row", margin: "3rem 4rem" }}
      >
        <div>
          <section className={utilStyles.headingMd}>
            <p>
              Hello, I'm <strong>Kennie</strong>, a software engineer 🤓 and
              this is my profile page. You can hang around to learn more about
              me.
              <br />
              You can also contact me on{" "}
              <a href="https://twitter.com/kennie_larkson">Twitter</a>{" "}
            </p>
            <p>
              This is my portfolio website - here I will make a showroom of my
              skills and services, I will write articles on the skills and
              technologies I work with so you may learn something while you hang
              out with me. Cool? 😎
            </p>
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  <hr />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
