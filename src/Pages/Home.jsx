import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LivroCard from '../components/LivroCard';

const livros = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  titulo: `Livro Fictício ${i + 1}`,
  autor: `Autor ${i + 1}`,
  imagem: `https://via.placeholder.com/150x220?text=Livro+${i + 1}`,
}));

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner de Chamada */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Hivox – Cresce ouvindo</h1>
        <p className="mb-4">Descubra seu próximo audiolivro favorito!</p>
        <a
          href="#catalogo"
          className="inline-block bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow"
        >
          Ir para o Catálogo
        </a>
      </section>

      {/* Catálogo de Livros */}
      <main id="catalogo" className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Catálogo</h2>
        <div className="flex flex-wrap justify-center">
          {livros.map((livro) => (
            <LivroCard
              key={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              imagem={livro.imagem}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
