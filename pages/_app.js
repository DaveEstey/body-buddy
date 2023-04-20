import { NextAuthProvider } from 'next-auth/react'
import { SessionProvider } from "next-auth/react"
import LoginPage from '../app/login/page'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <NextAuthProvider session={session}>
      <SessionProvider session={session}>
        <LoginPage {...pageProps} />
      </SessionProvider>
    </NextAuthProvider>
  )
}

export default MyApp
