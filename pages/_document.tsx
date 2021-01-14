import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleAnalytics from '../components/GoogleAnalytics'

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
