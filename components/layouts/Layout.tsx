import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element;
  title?: string;
}

const styles = {
  padding: "0 2rem",
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Exequiel Gerez" />
        <meta name="keywords" content={`${title}, Pokemon, Pokedex`} />
        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={`Este es el Pokemon: ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
        <title>{title || "Pokemon App"}</title>
      </Head>
      <Navbar />
      <main style={styles}>{children}</main>
    </>
  );
};
