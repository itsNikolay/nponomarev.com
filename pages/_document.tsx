import Document, { Html, Head, Main, NextScript } from 'next/document'
import process from 'process';
import React, {Suspense} from 'react';
const GoogleAnalytics = React.lazy(() => import('../components/GoogleAnalytics'));

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          { process.env.NODE_ENV === 'production' &&
          <Suspense fallback={<></>}>
            <GoogleAnalytics />
          </Suspense>
          }
        </body>
      </Html>
    )
  }
}
