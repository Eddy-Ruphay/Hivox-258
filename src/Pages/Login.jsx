import React, { useState } from 'react';

export default function Login() {
  const [numero, setNumero] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!numero || numero.length < 8) {
      alert('Por favor, insira um número válido.');
      return;
    }

    setEnviando(true);

    // URL do Web App (iremos configurar no próximo passo)
    const webhookURL = 'https://script.google.com/macros/s/SEU_WEBHOOK_URL/exec';

    const formData = new FormData();
    formData.append('numero', numero);

    try {
      await fetch(webhookURL, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Erro ao enviar para Sheets:', error);
    }

    // Redireciona para o WhatsApp do Hivox
    const link = `https://wa.me/258841251204?text=Olá,%20quero%20acesso%20ao%20Hivox`;
    window.location.href = link;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Login via WhatsApp</h2>
        <p className="mb-4 text-gray-600">Digite seu número de WhatsApp:</p>

        <input
          type="tel"
          placeholder="Ex: 841234567"
          className="w-full px-4 py-2 border rounded mb-4"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          disabled={enviando}
        >
          {enviando ? 'Enviando...' : 'Entrar com WhatsApp'}
        </button>
      </form>
    </div>
  );
}
