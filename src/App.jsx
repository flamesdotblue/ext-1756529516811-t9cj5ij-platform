import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BudgetCalculatorMini from './components/BudgetCalculatorMini';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page anchors
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="calculator" className="relative py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="mx-auto h-full max-w-5xl opacity-30 blur-3xl" style={{ background: 'radial-gradient(600px circle at 50% 10%, rgba(56,189,248,0.25), transparent 40%)' }} />
          </div>
          <div className="relative mx-auto max-w-6xl px-4">
            <BudgetCalculatorMini />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
