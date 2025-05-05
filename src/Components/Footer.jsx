import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8 text-sm text-gray-600">
      &copy; {new Date().getFullYear()} Hivox. Cresce ouvindo.
    </footer>
  );
}
