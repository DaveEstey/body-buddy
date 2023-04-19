
import './globals.css';
import NavBar from './components/NavBar';





 



export const metadata = {
  title: 'Body Buddy - Your Digital Workout Planner',
  description: 'Find exercises, design workouts, and track your progress with Body Buddy, your digital gym buddy and workout planner.',
  keywords: "body, workout, gym, exercise, fitness, planner"
}

export default function RootLayout ({children}) {
  
  return (
    
    <html lang="en">
      <body>
    
        <NavBar />
      
        <main suppressHydrationWarning={true}>
       {children}
       
        </main>
      </body>
    </html>
    
  )
}





