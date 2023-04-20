
import './globals.css';
import NavBar from './components/NavBar';

import EmailProvider from 'next-auth/providers/email'

export const metadata = {
  title: 'Body Buddy - Your Digital Workout Planner',
  description: 'Find exercises, design workouts, and track your progress with Body Buddy, your digital gym buddy and workout planner.',
  keywords: "body, workout, gym, exercise, fitness, planner"
}

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Add more providers here as needed
  ],
}

export default function RootLayout ({children}) {
  
  return (
    <html lang="en">
      <body>
        <NavBar />
        {typeof window !== 'undefined' && (
          <SessionProvider session={metadata}>
            <main suppressHydrationWarning={true}>
              {children}
            </main>
          </SessionProvider>
        )}
      </body>
    </html>
  )
}







