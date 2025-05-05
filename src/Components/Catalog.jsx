import { useState, useEffect } from 'react';
import { Heart, Headphones } from 'lucide-react';

const generateBooks = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Livro Fictício ${i + 1}`,
    author: `Autor ${i + 1}`,
    cover: `https://via.placeholder.com/150x220?text=Livro+${i + 1}`,
  }));
};

export default function Catalog() {
  const [books] = useState(generateBooks());

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map(book => (
        <div key={book.id} className="bg-white rounded-lg shadow p-2">
          <img src={book.cover} alt={book.title} className="w-full rounded" />
          <h4 className="mt-2 font-bold text-sm">{book.title}</h4>
          <p className="text-xs text-gray-600">{book.author}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2">
              <Heart size={16} className="text-gray-500" />
              <Headphones size={16} className="text-gray-500" />
            </div>
            <button className="text-purple-600 font-semibold text-xs">Ouvir</button>
          </div>
        </div>
      ))}
    </div>
  );
}