import { IntroSection } from "./components/IntroSection";
import { CrimeDataSection1 } from "./components/CrimeDataSection1";
import { CrimeDataSection2 } from "./components/CrimeDataSection2";
import { CrimeDataSection3 } from "./components/CrimeDataSection3";
import { OutroSection } from "./components/OutroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <IntroSection />
      <CrimeDataSection1 />
      <CrimeDataSection2 />
      <CrimeDataSection3 />
      <OutroSection />
    </div>
  );
}
