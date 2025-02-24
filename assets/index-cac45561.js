document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente.");
  
    /* ==================================================
       1. FONDO DE ESTRELLAS con <canvas>
    ===================================================== */
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";     // Detrás de todo
    canvas.style.pointerEvents = "none"; // No bloquear clics
    const ctx = canvas.getContext("2d");
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    // Creamos partículas
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `hsl(${Math.random() * 40 + 250}, 100%, 80%)` // Tonos púrpuras
    }));
  
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        // Movimiento
        p.x += p.speedX;
        p.y += p.speedY;
        // Rebote
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        // Dibujo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  
    /* ==================================================
       2. MENÚ HAMBURGER
    ===================================================== */
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
  
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("header__nav--visible");
      menuBtn.classList.toggle("header__menu-btn--active");
    });
  
    /* ==================================================
       3. RESALTAR SECCIÓN ACTIVA AL SCROLL (ScrollSpy)
    ===================================================== */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header__nav a");
  
    window.addEventListener("scroll", () => {
      // a) Header se oscurece al bajar
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
  
      // b) ScrollSpy
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // un poco menos que la altura del header
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      // Remove / add .active en enlaces
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    /* ==================================================
       4. VALIDACIÓN BÁSICA DEL FORMULARIO
    ===================================================== */
    window.checkForm = function (form) {
      // Campo nombre
      if (!form.nombre.value.trim()) {
        alert("Por favor, ingresa tu nombre.");
        return false;
      }
      // Campo correo
      if (!form.correo.value.trim()) {
        alert("Por favor, ingresa tu correo.");
        return false;
      }
      // Si pasa validaciones
      alert("Enviando tu mensaje...");
      return true;
    };
  
    /* ==================================================
       5. BOTÓN "VOLVER ARRIBA"
    ===================================================== */
    const btnTop = document.getElementById("btnTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTop.style.display = "block";
      } else {
        btnTop.style.display = "none";
      }
    });
  
    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  