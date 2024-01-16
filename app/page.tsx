import Nav from '@/components/nav';
import TickerTape from '@/components/tickertape';
import Dashboard from '@/components/dashboard';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="max-h-screen flex flex-col">
      <Nav />
      <TickerTape />
      <Dashboard />
      <Footer />
    </main>
  );
}
