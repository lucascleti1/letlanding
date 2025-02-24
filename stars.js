// stars.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Canvas stars script cargado.");
  
    // Crear y configurar el canvas
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none"; // Para que no interfiera con clics
  
    const ctx = canvas.getContext("2d");
    
    // Ajustar tamaño del canvas según la ventana
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    // Crear array de partículas
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `hsl(${Math.random() * 40 + 250}, 100%, 80%)` // Tonos púrpuras LET
    }));
  
    // Función para dibujar y actualizar partículas
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      particles.forEach(p => {
        // Mover
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Rebotes en bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Dibujar
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
  
      requestAnimationFrame(drawParticles);
    }
  
    drawParticles();
  });
  