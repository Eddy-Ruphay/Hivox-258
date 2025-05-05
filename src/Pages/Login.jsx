import React, { useEffect } from 'react';

export default function Login() {
  const userNumber = '258841251204'; // Substitua pelo número dinâmico se quiser futuramente
  const webhookUrl = `https://script.google.com/macros/s/AKfycbw-vcg1eD5NszmbZcihiawiP66A-ozfwPhXHWKvib-gWwMmsH17EIkIrFdfI3lEen7Z2A/exec?numero=${userNumber}`;

  useEffect(() => {
    // Envia o número para o webhook assim que o componente carrega
    fetch(webhookUrl)
      .then((res) => res.text())
      .then((res) => console.log(res));
  }, []);

  const whatsappLink = `https://wa.me/${userNumber}?text=Olá%20Hivox,%20quero%20fazer%20login`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Onda sonora animada */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-purple-500 animate-pulse"
            style={{
              height: `${10 + Math.random() * 40}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1s',
            }}
          />
        ))}
      </div>

      <p className="mb-4 text-gray-700 font-medium">Conectando com a Hivox...</p>

      <a
        href={whatsappLink}
        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        Entrar com WhatsApp
      </a>
    </div>
  );
}
