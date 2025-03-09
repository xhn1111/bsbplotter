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

  carousel.querySelector('.carousel-images').style.width = `${totalSlides * 100}%`;
  slides.forEach(slide => slide.style.width = `${100 / totalSlides}%`);

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
      "assets/products/imp-img1.webp",
      "assets/products/imp-img2.webp",
      "assets/products/imp-img3.webp",
      "assets/products/imp-img4.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Impressoras"
  },
  2: {
    title: "Placas",
    description: "Placas eletrônicas para manutenção de equipamentos de impressão.",
    images: [
      "assets/products/placa-img1.webp",
      "assets/products/placa-img2.webp",
      "assets/products/placa-img3.webp",
      "assets/products/placa-img4.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Placas"
  },
  3: {
    title: "Capstation",
    description: "Temos todos os modelos de capstation dx5, dx7, Xp600, i3200, i1600.",
    images: [
      "assets/products/cap-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Capstation"
  },
  4: {
    title: "Impressora Kmj 1901 Black",
    description: "Cabeça de impressão Epson i3200.",
    images: [
      "assets/products/imp-img1901.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Impressora+Kmj+1901+Black"
  },
  5: {
    title: "Bomba de Tinta",
    description: "Bomba de tinta de 100 e 300ml.",
    images: [
      "assets/products/bomb-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Bomba+de+Tinta"
  },
  6: {
    title: "Cartuchos de Tinta Ecosolvente",
    description: "Cartuchos de tinta ecosolvente.",
    images: [
      "assets/products/cart-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+os+Cartuchos+de+Tinta+Ecosolvente"
  },
  7: {
    title: "Sensor Encoder",
    description: "Sensor encoder para impressoras.",
    images: [
      "assets/products/enc-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Sensor+Encoder"
  },
  8: {
    title: "Estação Limpeza",
    description: "Estação de limpeza I3200, Dx5, Xp600.",
    images: [
      "assets/products/est-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Estação+Limpeza"
  },
  9: {
    title: "Filtros",
    description: "Filtros solventes e filtros disco ecosolvente.",
    images: [
      "assets/products/filt-img1.webp",
      "assets/products/filt-img2.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+os+Filtros"
  },
  10: {
    title: "Cabeças de Impressão Epson i3200, XP600 e Dx5",
    description: "Cabeças de impressão Epson i3200, XP600 e Dx5.",
    images: [
      "assets/products/i3200-img1.webp",
      "assets/products/i3200-img2.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Cabeças+de+Impressão+Epson+i3200,+XP600+e+Dx5"
  },
  11: {
    title: "Fita Encoder",
    description: "Fita encoder 150, 180 e 360.",
    images: [
      "assets/products/fitenc-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Fita+Encoder"
  },
  12: {
    title: "Cabo Flat",
    description: "Cabo flat Dx5, Dx7, i3200, i1600, Xp600.",
    images: [
      "assets/products/flat-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Cabo+Flat"
  },
  13: {
    title: "Fiber Laser",
    description: "Máquina de gravação a laser.",
    images: [
      "assets/products/las-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Fiber+Laser"
  },
  14: {
    title: "Fibra Óptica",
    description: "Fibra óptica para impressoras solvente e ecosolvente.",
    images: [
      "assets/products/opt-img1.webp"
    ],
    whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Fibra+Óptica"
  }
};

// Função para abrir o modal
function openModal(productId) {
  const modal = document.getElementById('product-modal');
  const product = products[productId];

  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-whatsapp').setAttribute('href', product.whatsapp);

  const carouselImages = modal.querySelector('.modal-carousel .carousel-images');
  carouselImages.innerHTML = '';
  product.images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${product.title} Imagem ${index + 1}`;
    img.addEventListener('click', () => openImageOverlay(src));
    carouselImages.appendChild(img);
  });

  const modalCarousel = modal.querySelector('.modal-carousel');
  initializeCarousel(modalCarousel);

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('product-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('product-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('product-modal')) {
    closeModal();
  }
});

// Função para abrir o overlay de imagem ampliada
function openImageOverlay(imageSrc) {
  const overlay = document.getElementById('image-overlay');
  const enlargedImage = document.getElementById('enlarged-image');
  enlargedImage.src = imageSrc;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Função para fechar o overlay de imagem ampliada
function closeImageOverlay() {
  const overlay = document.getElementById('image-overlay');
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

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

// Adicionar evento ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  const texto = `Nome: ${nome}%0ANúmero: ${telefone}%0AMensagem: ${mensagem}`;
  const numero = "5561996909562";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});