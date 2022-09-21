import Head from 'next/head';

const Seo = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      {children}
    </>
  );
};

Seo.defaultProps = {
  title: 'Pokemon App',
  description: 'This app is designed by Mohammad Mohajer only for test purposes as an assessment',
  keywords: 'Pokemon, Doctalk, Mohammad Mohajer, Assessment'
};

export default Seo;
