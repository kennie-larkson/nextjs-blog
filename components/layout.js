import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const name = "Lawal Abd'Kehinde";
export const siteTitle = "KennieCodeCamp";
const siteIntro = (
  <h1 className={utilStyles.heading2Xl} style={{ marginTop: "0" }}>
    <p>
      Welcome to{" "}
      <Link href="/">
        <a style={{ textDecoration: "none" }}>{siteTitle}</a>
      </Link>
    </p>
  </h1>
);

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          ></link>
          <meta
            name="description"
            content="KennieCodeCamp - the porfolio website of Lawal, Abd'Kehinde"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>
          {home ? (
            <>
              <div>{siteIntro}</div>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* </div> */}
      {/* </main> */}
    </>
  );
}
