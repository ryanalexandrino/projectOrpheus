var cont = 1; // Define o contador para começar no primeiro slide

setInterval(() => {
    proximaImg();
}, 7000);  // Intervalo de 7 segundos

function proximaImg() {
    cont++;  // Incrementa o contador para o próximo slide

    if (cont > 3) {
        cont = 1;  // Resetando para o primeiro slide, mantendo o movimento contínuo
    }

    document.getElementById('radio' + cont).checked = true;  // Marca o rádio correspondente ao slide
}

//Slide produtos

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true, 
    delay: 3000,
    loop: true,
    breakpoints: {
      50:{
        slidesPerView:1,
        spaceBetween:30,
      },
      640:{
        slidesPerView:2,
        spaceBetween:30,
      },
      992:{
        slidesPerView:3,
        spaceBetween:30,
      },
      1200:{
        slidesPerView:4,
        spaceBetween:30,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 
