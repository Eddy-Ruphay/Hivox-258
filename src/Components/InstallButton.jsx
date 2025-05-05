import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react'; // Ícone moderno

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-bounce">
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
      >
        <Download size={20} />
        <span>Instalar App</span>
      </button>
    </div>
  );
}
