    // Selecciona todos los enlaces de la página
    let enlaces = document.querySelectorAll('a');
    let tooltip = document.getElementById('tooltip');

    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', (event) => {
          tooltip.innerText = `La URL de este enlace es: ${event.target.href}`;
          tooltip.style.display = 'block';
        });
      
        enlace.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
        });
      });
      