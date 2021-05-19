import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const name = "Lawal Abdulrafiu Kehinde";
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
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
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
      <footer
        style={{
          display: "flex",
          backgroundColor: "skyblue",
          padding: "2rem",
          color: "whitesmoke",
          marginTop: "1rem",
          // justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ margin: "1rem" }}>
            <a href="https://twitter.com/kennie_larkson">Twitter</a>
          </p>{" "}
          <p style={{ margin: "1rem" }}>
            {" "}
            <a href="https://linkedin.com/in/kennie-larkson">LinkedIn</a>
          </p>
          <p style={{ margin: "1rem" }}>
            <a href="https://github.com/kennie-larkson">Github</a>{" "}
          </p>
        </div>
        <h5>
          <p>Made with ❤ using NextJS and Bootstrap </p>
        </h5>
        <strong>©2021 KCC</strong>
      </footer>
    </>
  );
}
