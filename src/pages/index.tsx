import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="tp-hero">
      <div className="container">
        <p className="tp-hero-eyebrow">throw.party</p>
        <Heading as="h1" className="tp-hero-title">
          {siteConfig.title}
        </Heading>
        <p className="tp-hero-lede">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        {/* XXX: maybe link to our three main content types here here*/}
      </main>
    </Layout>
  );
}
