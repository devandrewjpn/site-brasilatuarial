import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Brasil Atuarial`}
      </title>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Grupo Brasil Atuarial" />
      <meta name="robots" content="noindex, follow" />
      
      <link rel="icon" href="favicon.svg" />
    </Head>
  </>
);

export default SEO;
