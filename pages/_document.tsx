import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import dynamic from 'next/dynamic'

const GoogleAnalytics = dynamic(() => import('../components/GoogleAnalytics'));

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          { process.env.NODE_ENV === 'production' && <GoogleAnalytics /> }
      </body>
    </Html>
  )
  }
}
