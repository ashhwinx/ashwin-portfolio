// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Stats from './components/Stats';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen  bg-gray-900 text-white">
//       <Navbar />
//       <Hero />
//       <Skills />
//       <Projects />
//       <Education />
//       <Stats />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gray-900 text-white">
      <section className="snap-start ">
        <Navbar />
        <Hero />
      </section>
      <section className="snap-start ">
        <Skills />
      </section>
      <section className="snap-start ">
        <Projects />
      </section>
      <section className="snap-start ">
        <Education />
      </section>
      <section className="snap-start ">
        <Stats />
      </section>
      <section className="snap-start ">
        <Contact />
      </section>
      <section className="snap-start ">
        <Footer />
      </section>
    </div>
  );
}

export default App;

