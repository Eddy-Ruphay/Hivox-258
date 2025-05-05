import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Catálogo Hivox</h2>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}