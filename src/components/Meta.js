import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Get Feed back for your website's UI/UX and imrove conversion rate",
  keywords: "UI,UX,website feedback",
  description: "Get Feed back for your website's UI/UX and imrove conversion rate",
};

export default Meta;
