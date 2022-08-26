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
      </Head>
      {children}
    </>
  );
};

Seo.defaultProps = {
  title: 'Something | APP-NAME',
  description: 'Some Description',
  keywords: 'Keyword1, Keyword2, Keyword3'
};

export default Seo;
