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
  title: 'Mohammad Mohajer',
  description: `A passionate software developer with a strong analytical mindset who really enjoys dealing with different challenges in the world of computer science and information technology.`,
  keywords:
    'Mohammad Mohajer, Mohammad Mahdi Mohajer, Software Developer, Full Stack Developer, MVP Developer, App Developer, Mobile App Developer, Web App Developer, Progressive App Developer, Machine Learning, Data Analysis, Data Analytics, Artificial Intelligence, ISWAD, AI'
};

export default Seo;
