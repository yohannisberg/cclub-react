import './App.css'
import { Hero } from './components/1_Hero/Hero'
import { HowItWorks } from './components/2_HowItWorks/HowItWorks'
import { Perks } from './components/4_Perks/Perks'
import { WaysToEarn } from './components/5_WaysToEarn/WaysToEarn'

export default function App() {
  return (
    <div className="cclub-wrapper">
      <Hero />
      <HowItWorks />
      <Perks />
      <WaysToEarn />
    </div>
  )
}