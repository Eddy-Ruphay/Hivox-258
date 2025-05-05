export default function Login() {
  const whatsappLink = 'https://wa.me/258123456789?text=Olá%20Hivox,%20quero%20fazer%20login';
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <a
        href={whatsappLink}
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Entrar com WhatsApp
      </a>
    </div>
  );
}