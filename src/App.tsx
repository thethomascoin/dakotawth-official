import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Music } from './components/sections/Music';
import { Social } from './components/sections/Social';
import { ScrollFrames } from './components/animations/ScrollFrames';

function App() {
    return (
        <div className="relative min-h-screen bg-zinc-950">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-50 noise-bg pointer-events-none" />

            {/* Global Scroll Animation */}
            <ScrollFrames />

            {/* UI Overlay */}
            <div className="relative z-10 selection:bg-zinc-100 selection:text-zinc-950 bg-transparent">
                <Navbar />
                <main className="bg-transparent">
                    <Hero />
                    <About />
                    <Music />
                    <Social />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
