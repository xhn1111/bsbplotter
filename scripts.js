// Navegação entre abas
function showTab(tabId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('onclick') === `showTab('${tabId}')`) {
        link.classList.add('active');
      }
    });
  }
  
  // Controle de carrosséis
  function initializeCarousel(carousel) {
    let currentSlide = 0;
    const slides = carousel.querySelectorAll('.carousel-images img');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const totalSlides = slides.length;
  
    // Ajusta a largura do container de imagens com base no número de slides
    carousel.querySelector('.carousel-images').style.width = `${totalSlides * 100}%`;
    slides.forEach(slide => slide.style.width = `${100 / totalSlides}%`);
  
    // Gera os pontos dinamicamente
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');
  
    function updateCarousel() {
      const offset = -currentSlide * (100 / totalSlides);
      carousel.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  
    carousel.querySelector('.prev').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  
    carousel.querySelector('.next').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });
  
    updateCarousel();
  }
  
  document.querySelectorAll('.carousel').forEach(initializeCarousel);
  
  // Dados dos produtos
  const products = {
    1: {
      title: "Impressoras",
      description: "Impressoras a base de solvente e recorte para projetos de alta qualidade.",
      images: [
        "assets/products/imp-img1.jpg",
        "assets/products/imp-img2.jpg",
        "assets/products/imp-img3.jpg"
      ],
      whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Impressoras"
    },
    2: {
      title: "Placas",
      description: "Placas eletrônicas para manutenção de equipamentos de impressão.",
      images: [
        "assets/products/placa-img1.jpg",
        "assets/products/placa-img2.jpg"
      ],
      whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Placas"
    },
    3: {
      title: "Peças",
      description: "Peças de reposição para impressoras e plotters.",
      images: [
        "assets/products/pec-img1.avif",
        "assets/products/pec-img2.avif",
        "assets/products/pec-img3.avif",
        "assets/products/pec-img4.avif"
      ],
      whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Peças"
    }
  };
  
  // Função para abrir o modal
  function openModal(productId) {
    const modal = document.getElementById('product-modal');
    const product = products[productId];
  
    // Preenche o conteúdo do modal
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-whatsapp').setAttribute('href', product.whatsapp);
  
    // Preenche o carrossel do modal
    const carouselImages = modal.querySelector('.modal-carousel .carousel-images');
    carouselImages.innerHTML = '';
    product.images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${product.title} Imagem ${index + 1}`;
      carouselImages.appendChild(img);
    });
  
    // Inicializa o carrossel do modal
    const modalCarousel = modal.querySelector('.modal-carousel');
    initializeCarousel(modalCarousel);
  
    // Mostra o modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Fechar modal ao clicar fora
  document.getElementById('product-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('product-modal')) {
      closeModal();
    }
  });
  
  // Efeito de scroll no header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Ano dinâmico no footer
  document.getElementById('year').textContent = new Date().getFullYear();