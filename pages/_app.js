import { NextAuthProvider } from 'next-auth/react'
import { Provider } from 'next-auth/client'
import LoginPage from '../components/LoginPage'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <NextAuthProvider session={session}>
      <Provider session={session}>
        <LoginPage {...pageProps} />
      </Provider>
    </NextAuthProvider>
  )
}

export default MyApp
