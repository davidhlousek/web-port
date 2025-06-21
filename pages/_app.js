import '../styles/globals.css'
import CustomCursor from '../components/CustomCursor'
import ParticlesBackground from '../components/ParticlesBackground'
import InfiniteLoopText from '../components/InfiniteLoopText'

export default function App({ Component, pageProps }) {
  return (
    <div className="relative z-0">
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>
      <InfiniteLoopText />
      <CustomCursor />
      <Component {...pageProps} />
    </div>
  )
}