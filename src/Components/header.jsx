import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700">Hivox</h1>
      <nav className="space-x-4">
        <a href="#catalogo" className="text-gray-700 hover:text-purple-600">
          Catálogo
        </a>
        <a href="#" className="text-gray-700 hover:text-purple-600">
          Sobre
        </a>
        <a href="#" className="text-gray-700 hover:text-purple-600">
          Entrar
        </a>
      </nav>
    </header>
  );
}
