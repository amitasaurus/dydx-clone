import Nav from '@/components/nav';
import TickerTape from '@/components/tickertape';
import Dashboard from '@/components/dashboard';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen overflow-hidden">
      <Nav />
      <TickerTape />
      <Dashboard />
      <Footer />
    </main>
  );
}
