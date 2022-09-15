import Head from "next/head";
import Link from "next/link";

import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const name = "Abdulrafiu Kehinde Lawal";
export const siteTitle = "KennieCodeCamp";

export function SiteIntro() {
  return (
    <p className="font-mono text-2xl font-bold my-5 text-center">
      Welcome to{" "}
      <Link href="/">
        <a>{siteTitle}</a>
      </Link>
    </p>
  );
}

export default function Layout({
  children,
  home,
  // signupform,
  form,
  projects,
  about,
}) {
  return (
    <>
      <Navbar
        // form={signupform}
        form={form}
        home={home}
        projects={projects}
        about={about}
        title={siteTitle}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />

        <meta
          name="description"
          content="KennieCodeCamp - the porfolio website of Lawal, Abdulrafiu Kehinde"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header home={home} name={name} />

      <main>{children}</main>

      {/* {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      <Footer />
    </>
  );
}
