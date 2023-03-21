import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  const name = 'nest-storybook'
  const url = 'https://github.com/WuChenDi/react-components'
  const title = `${name}`
  const description = `${name} React components library.`
  const keywords = 'next, components, storybook'

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover'
        />

        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <meta property='og:site_name' content={name} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/thumbnail.png' />
      </Head>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
