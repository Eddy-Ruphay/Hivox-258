import React from 'react';
import { FaHeart, FaHeadphones } from 'react-icons/fa';

const LivroCard = ({ titulo, autor, imagem }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-4">
      <img src={imagem} alt={titulo} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{titulo}</h3>
        <p className="text-sm text-gray-500">{autor}</p>
        <div className="flex items-center gap-4 mt-3 text-indigo-600">
          <FaHeart title="Adicionar aos favoritos" />
          <FaHeadphones title="Disponível em áudio" />
        </div>
      </div>
    </div>
  );
};

export default LivroCard;
