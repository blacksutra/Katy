let slideIndex = 1;
let slideInterval;

// Función principal para mostrar las diapositivas
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n) {
    slideIndex = n;
    clearInterval(slideInterval); // Detener la transición automática si el usuario hace clic en una miniatura
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Establecer la transición automática
  slideInterval = setInterval(() => {
    showSlides(slideIndex += 1);
  }, 5000); // Cambiar la imagen cada 5 segundos
}

// Iniciar la transición automática al cargar la página
showSlides();

// Función para navegar a la diapositiva anterior o siguiente
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Función para navegar a una diapositiva específica al hacer clic en una miniatura
function currentSlide(n) {
  showSlides((slideIndex = n));
}