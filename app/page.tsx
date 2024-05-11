import Newest from "../components/Newest";
import Hero from "../components/Hero";


export default function Home() {
  return (
      <main >
          <div className="bg-secondary pb-6 sm:pb-8 lg:pb-12 ">
            <Hero />
            <Newest />
          </div>
      </main>
    );
}
