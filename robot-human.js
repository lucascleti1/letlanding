document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada exitosamente.');
  
    // Animación simple de estrellas
    const stars = document.querySelector('body');
    stars.style.animation = 'moveStars 10s linear infinite';
  
    // Placeholder para futuras interacciones
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulario enviado. Nos pondremos en contacto pronto.');
    });
  });
  