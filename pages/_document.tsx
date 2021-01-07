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
          <GoogleAnalytics />
        </body>
      </Html>
    )
  }
}
