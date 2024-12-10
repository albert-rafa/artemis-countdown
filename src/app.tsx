import artemisLogo from "./assets/artemis-logo.png";
import { Countdown } from "./components/countdown";
import { Link } from "./components/link"
import { Social } from "./components/social";

export default function App() {
  const launch = new Date(Date.UTC(2026, 4, 1, 0, 1))
  // April 1st, 2026 00:01 GMT
  
  return (
    <div className="text-white h-full w-full bg-image bg-cover flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <img 
          src={artemisLogo} 
          alt="Artemis program" 
          className="h-[20vh]" 
        />
        <p className="font-display text-4xl">
          <span className="font-medium">Artemis 2</span> launch in
        </p>
      </div>

      <Countdown date={launch} />

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 text-xl uppercase">
          <Link 
            href="https://www.nasa.gov/feature/artemis/"
            target="_blank"
          >
            Learn more
          </Link>
          <Link 
            href="https://youtube.com"
            target="_blank"
          >
            Watch live
          </Link>
        </div>
        <Social />
      </div>
    </div>
  )
}