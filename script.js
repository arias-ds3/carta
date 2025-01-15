// Bloquear menú contextual
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  
    // Crear una imagen dinámica
    const img = document.createElement('img');
    img.src = 'corazon.png'; // Cambia por la ruta de tu imagen
    img.alt = 'corazon';
    img.style.width = '200px'; // Ancho de la imagen
    img.style.position = 'absolute'; // Posicionar la imagen
    img.style.top = `${e.clientY}px`; // Coordenada Y del clic
    img.style.left = `${e.clientX}px`; // Coordenada X del clic
  
    // Eliminar imágenes previas
    const existingImg = document.querySelector('.context-image');
    if (existingImg) {
      existingImg.remove();
    }
  
    // Añadir clase para identificar la imagen y agregar al cuerpo
    img.classList.add('context-image');
    document.body.appendChild(img);
  });
  
  // Bloquear combinaciones de teclas
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });
  