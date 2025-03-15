const appData = {
  activeTab: 'home',
  selectedProduct: null,
  selectedImage: null,
  products: {
    1: { title: "Impressoras", description: "Impressoras a base de solvente e recorte.", images: ["assets/products/imp-img1.webp", "assets/products/imp-img2.webp", "assets/products/imp-img3.webp", "assets/products/imp-img4.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Impressoras" },
    2: { title: "Placas", description: "Placas eletrônicas para manutenção.", images: ["assets/products/placa-img1.webp", "assets/products/placa-img2.webp", "assets/products/placa-img3.webp", "assets/products/placa-img4.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Placas" },
    3: { title: "Capstation", description: "Modelos dx5, dx7, Xp600, i3200, i1600.", images: ["assets/products/cap-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Capstation" },
    4: { title: "Impressora Kmj 1901 Black", description: "Cabeça Epson i3200.", images: ["assets/products/imp-img1901.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Impressora+Kmj+1901+Black" },
    5: { title: "Bomba de Tinta", description: "100 e 300ml.", images: ["assets/products/bomb-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Bomba+de+Tinta" },
    6: { title: "Cartuchos Ecosolvente", description: "Tinta ecosolvente.", images: ["assets/products/cart-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+os+Cartuchos+Ecosolvente" },
    7: { title: "Sensor Encoder", description: "Para impressoras.", images: ["assets/products/enc-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Sensor+Encoder" },
    8: { title: "Estação Limpeza", description: "I3200, Dx5, Xp600.", images: ["assets/products/est-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Estação+Limpeza" },
    9: { title: "Filtros", description: "Solventes e disco ecosolvente.", images: ["assets/products/filt-img1.webp", "assets/products/filt-img2.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+os+Filtros" },
    10: { title: "Cabeças Epson", description: "i3200, XP600, Dx5.", images: ["assets/products/i3200-img1.webp", "assets/products/i3200-img2.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+as+Cabeças+Epson" },
    11: { title: "Fita Encoder", description: "150, 180 e 360.", images: ["assets/products/fitenc-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Fita+Encoder" },
    12: { title: "Cabo Flat", description: "Dx5, Dx7, i3200, i1600, Xp600.", images: ["assets/products/flat-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Cabo+Flat" },
    13: { title: "Fiber Laser", description: "Corte e gravação a laser.", images: ["assets/products/las-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+o+Fiber+Laser" },
    14: { title: "Fibra Óptica", description: "Para impressoras solvente e ecosolvente.", images: ["assets/products/opt-img1.webp"], whatsapp: "https://wa.me/5561996909562?text=Quero+saber+mais+sobre+a+Fibra+Óptica" }
  },
  contact: { nome: '', telefone: '', mensagem: '' },
  submitContactForm() {
    const texto = `Nome: ${this.contact.nome}%0ANúmero: ${this.contact.telefone}%0AMensagem: ${this.contact.mensagem}`;
    window.open(`https://wa.me/5561996909562?text=${encodeURIComponent(texto)}`, '_blank');
    this.contact = { nome: '', telefone: '', mensagem: '' };
  },
  openModal(product) {
    this.selectedProduct = product;
  },
  openImage(img) {
    this.selectedImage = img;
  }
};