import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `https://www.googletagmanager.com/gtag/js?id=G-9P6FD85M0G`,
          }}
        ></script>

        <script
          id="myscript2"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9P6FD85M0G');
              `,
          }}
        />
        <script
          id="myscript3"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-9P6FD85M0G`}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
