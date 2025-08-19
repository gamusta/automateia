import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Sectors from './components/Sectors';
/*import Testimonials from './components/Testimonials';*/
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Problem />
            <Solution />
            <Benefits />
            <Sectors />
            {/*<Testimonials />*/}
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default App;