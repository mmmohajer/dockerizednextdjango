import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* In order to download minified js and css files for code of 
          rich text editor --> https://prismjs.com/download.html#themes=prism */}
          <link rel="stylesheet" type="text/css" href="/styles/prism.css"></link>
          <script src="/js/prism.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
