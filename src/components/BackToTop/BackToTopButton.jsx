import React from 'react';

function BackToTopButton() {
  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Para uma rolagem suave até o topo
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default BackToTopButton;