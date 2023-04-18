import MainHero from "./components/MainHero";
import WorkoutContainer from "./components/WorkoutContainer";
import LowerImage from "./components/LowerImage";
import { SessionProvider } from "next-auth/react"

const HomePage = () => {
  return (
    <>
      <MainHero />
      <WorkoutContainer />
      <LowerImage />
      
    </>
  )
}

export default HomePage