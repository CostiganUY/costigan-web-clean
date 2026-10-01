/* =========================
NAVBAR SCROLL EFFECT
========================= */

const nav = document.getElementById("mainNav");

if(nav){

window.addEventListener("scroll", () => {
revealSections();
highlightNav();
}, { passive:true });

}


/* =========================
SCROLL REVEAL SECTIONS
========================= */

const sections = document.querySelectorAll("section");

function revealSections(){

const trigger = window.scrollY + window.innerHeight - 120;

sections.forEach(section => {

if(trigger > section.offsetTop){

section.classList.add("visible");

}

});

}

revealSections();


/* =========================
HERO PARALLAX
========================= */

const hero = document.querySelector(".hero-bg");

if(hero){

window.addEventListener("scroll", () => {
const offset = window.scrollY * 0.3;
hero.style.transform = `translateY(${offset}px)`;
});
  
}


/* =========================
SMOOTH SCROLL NAV
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* =========================
ACTIVE NAV SECTION GLOW
========================= */

const navLinks = document.querySelectorAll(".nav-left a, .nav-right a");
const pageSections = document.querySelectorAll("section");

function highlightNav(){

let scrollPos = window.scrollY + window.innerHeight/3;

pageSections.forEach(section => {

if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){

navLinks.forEach(link => {

link.classList.remove("nav-active");

if(link.getAttribute("href") === "#" + section.id){

link.classList.add("nav-active");

}

});

}

});

}

window.addEventListener("scroll", revealSections, { passive:true });
highlightNav();

/* =========================
   GALLERY EVENT ALBUMS
========================= */

const galleries = {

  balzo: {
    title: "BALZO",
    images: [
      "assets/img/gallery/balzo/Balzo1.webp",
      "assets/img/gallery/balzo/Balzo2.webp",
      "assets/img/gallery/balzo/Balzo3.webp",
      "assets/img/gallery/balzo/Balzo4.webp",
      "assets/img/gallery/balzo/Balzo5.webp"
    ]
  },

  film: {
    title: "FILM",
    images: [
      "assets/img/gallery/film/Film1.webp",
      "assets/img/gallery/film/Film2.webp",
      "assets/img/gallery/film/Film3.webp",
      "assets/img/gallery/film/Film4.webp",
      "assets/img/gallery/film/Film5.webp",
      "assets/img/gallery/film/Film6.webp",
      "assets/img/gallery/film/Film7.webp",
      "assets/img/gallery/film/Film8.webp",
      "assets/img/gallery/film/Film9.webp",
      "assets/img/gallery/film/Film10.webp",
      "assets/img/gallery/film/Film11.webp",
      "assets/img/gallery/film/Film12.webp",
      "assets/img/gallery/film/Film13.webp",
      "assets/img/gallery/film/Film14.webp",
      "assets/img/gallery/film/Film15.webp",
      "assets/img/gallery/film/Film16.webp",
      "assets/img/gallery/film/Film17.webp",
      "assets/img/gallery/film/Film18.webp",
      "assets/img/gallery/film/Film19.webp",
      "assets/img/gallery/film/Film20.webp"
    ]
  },

  grabacion: {
    title: "GRABACIÓN",
    images: [
      "assets/img/gallery/grabacion/Grab1.webp",
      "assets/img/gallery/grabacion/Grab2.webp",
      "assets/img/gallery/grabacion/Grab3.webp",
      "assets/img/gallery/grabacion/Grab4.webp",
      "assets/img/gallery/grabacion/Grab5.webp",
      "assets/img/gallery/grabacion/Grab6.webp",
      "assets/img/gallery/grabacion/Grab7.webp",
      "assets/img/gallery/grabacion/Grab8.webp"
    ]
  },

  lunas: {
    title: "LUNAS",
    images: [
      "assets/img/gallery/lunas/Lunas1.webp",
      "assets/img/gallery/lunas/Lunas2.webp",
      "assets/img/gallery/lunas/Lunas3.webp",
      "assets/img/gallery/lunas/Lunas4.webp",
      "assets/img/gallery/lunas/Lunas5.webp",
      "assets/img/gallery/lunas/Lunas6.webp",
      "assets/img/gallery/lunas/Lunas7.webp",
      "assets/img/gallery/lunas/Lunas8.webp",
      "assets/img/gallery/lunas/Lunas9.webp",
      "assets/img/gallery/lunas/Lunas10.webp",
      "assets/img/gallery/lunas/Lunas11.webp"
    ]
  },

  savia: {
    title: "SAVIA",
    images: [
      "assets/img/gallery/savia/Savia1.webp",
      "assets/img/gallery/savia/Savia2.webp",
      "assets/img/gallery/savia/Savia3.webp",
      "assets/img/gallery/savia/Savia4.webp",
      "assets/img/gallery/savia/Savia5.webp",
      "assets/img/gallery/savia/Savia6.webp",
      "assets/img/gallery/savia/Savia7.webp",
      "assets/img/gallery/savia/Savia8.webp",
      "assets/img/gallery/savia/Savia9.webp",
      "assets/img/gallery/savia/Savia10.webp"
    ]
  },

  barreiro: {
    title: "BARREIRO",
    images: [
      "assets/img/gallery/barreiro/Barreiro1.webp",
      "assets/img/gallery/barreiro/Barreiro2.webp",
      "assets/img/gallery/barreiro/Barreiro3.webp",
      "assets/img/gallery/barreiro/Barreiro4.webp",
      "assets/img/gallery/barreiro/Barreiro5.webp"
    ]
  },

  im: {
    title: "IM",
    images: [
      "assets/img/gallery/im/Im1.webp",
      "assets/img/gallery/im/Im2.webp",
      "assets/img/gallery/im/Im3.webp",
      "assets/img/gallery/im/Im4.webp",
      "assets/img/gallery/im/Im5.webp",
      "assets/img/gallery/im/Im6.webp"
    ]
  },

  inmigrantes: {
    title: "INMIGRANTES",
    images: [
      "assets/img/gallery/inmigrantes/Inmi1.webp",
      "assets/img/gallery/inmigrantes/Inmi2.webp",
      "assets/img/gallery/inmigrantes/Inmi3.webp",
      "assets/img/gallery/inmigrantes/Inmi4.webp",
      "assets/img/gallery/inmigrantes/Inmi5.webp",
      "assets/img/gallery/inmigrantes/Inmi6.webp",
      "assets/img/gallery/inmigrantes/Inmi7.webp"
    ]
  },

  newpalmer: {
    title: "NEW PALMER",
    images: [
      "assets/img/gallery/newpalmer/Newpalmer1.webp",
      "assets/img/gallery/newpalmer/Newpalmer2.webp",
      "assets/img/gallery/newpalmer/Newpalmer3.webp",
      "assets/img/gallery/newpalmer/Newpalmer4.webp",
      "assets/img/gallery/newpalmer/Newpalmer5.webp",
      "assets/img/gallery/newpalmer/Newpalmer6.webp",
      "assets/img/gallery/newpalmer/Newpalmer7.webp"
    ]
  }

};


const galleryCards = document.querySelectorAll(".gallery-card");

const galleryModal = document.getElementById("galleryModal");

const galleryModalImg = document.getElementById("galleryModalImg");

const galleryModalTitle = document.getElementById("galleryModalTitle");

const galleryModalCounter = document.getElementById("galleryModalCounter");

const galleryModalClose = document.querySelector(".gallery-modal-close");

const galleryPrev = document.querySelector(".gallery-prev");

const galleryNext = document.querySelector(".gallery-next");


let currentGallery = null;

let currentGalleryIndex = 0;


/* =========================
   OPEN GALLERY
========================= */

function openGallery(galleryName){

  const gallery = galleries[galleryName];

  if(!gallery) return;

  currentGallery = gallery;

  currentGalleryIndex = 0;

  updateGalleryImage();

  galleryModal.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================
   UPDATE IMAGE
========================= */

function updateGalleryImage(){

  if(!currentGallery) return;

  galleryModalImg.src =
    currentGallery.images[currentGalleryIndex];

  galleryModalImg.alt =
    currentGallery.title;

  galleryModalTitle.textContent =
    currentGallery.title;

  galleryModalCounter.textContent =
    `${currentGalleryIndex + 1} / ${currentGallery.images.length}`;

}


/* =========================
   NEXT IMAGE
========================= */

function nextGalleryImage(){

  if(!currentGallery) return;

  currentGalleryIndex =
    (currentGalleryIndex + 1) %
    currentGallery.images.length;

  updateGalleryImage();

}


/* =========================
   PREVIOUS IMAGE
========================= */

function previousGalleryImage(){

  if(!currentGallery) return;

  currentGalleryIndex =
    (currentGalleryIndex - 1 +
    currentGallery.images.length) %
    currentGallery.images.length;

  updateGalleryImage();

}


/* =========================
   CARD CLICK
========================= */

galleryCards.forEach(card => {

  card.addEventListener("click", () => {

    const galleryName =
      card.getAttribute("data-gallery");

    openGallery(galleryName);

  });

});


/* =========================
   BUTTONS
========================= */

galleryNext.addEventListener(
  "click",
  nextGalleryImage
);

galleryPrev.addEventListener(
  "click",
  previousGalleryImage
);


/* =========================
   CLOSE
========================= */

function closeGallery(){

  galleryModal.classList.remove("active");

  document.body.style.overflow = "";

}


galleryModalClose.addEventListener(
  "click",
  closeGallery
);


galleryModal.addEventListener("click", e => {

  if(e.target === galleryModal){

    closeGallery();

  }

});


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", e => {

  if(!galleryModal.classList.contains("active")){
    return;
  }

  if(e.key === "Escape"){

    closeGallery();

  }

  if(e.key === "ArrowRight"){

    nextGalleryImage();

  }

  if(e.key === "ArrowLeft"){

    previousGalleryImage();

  }

});

/* =========================
   GALLERY TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

galleryModal.addEventListener("touchstart", e => {

  if(!galleryModal.classList.contains("active")){
    return;
  }

  touchStartX = e.changedTouches[0].screenX;

}, { passive:true });


galleryModal.addEventListener("touchend", e => {

  if(!galleryModal.classList.contains("active")){
    return;
  }

  touchEndX = e.changedTouches[0].screenX;

  const swipeDistance = touchEndX - touchStartX;

  if(Math.abs(swipeDistance) < 50){
    return;
  }

  if(swipeDistance < 0){
    nextGalleryImage();
  }else{
    previousGalleryImage();
  }

});

/* =========================
BIO LIGHTBOX
========================= */

const bioImage = document.querySelector(".bio-photo img");

if(bioImage){

bioImage.addEventListener("click", () => {

lightbox.classList.add("active");
lightboxImg.src = bioImage.src;

});

}

/* =========================
NAVBAR DINAMICO
========================= */

let lastScroll = 0;
const navbar = document.querySelector("#mainNav");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll <= 0){
navbar.style.transform = "translateY(0)";
return;
}

if(currentScroll > lastScroll){
navbar.style.transform = "translateY(-100%)";
}else{
navbar.style.transform = "translateY(0)";
}

lastScroll = currentScroll;

});

/* =========================
VIDEOS FIX
========================= */

document.querySelectorAll(".video-item").forEach(video => {

  video.addEventListener("click", () => {

    const link = video.getAttribute("data-link");

    if(link){
      window.open(link, "_blank");
    }

  });

});

/* =========================
SECCIONES FIX
========================= */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("visible");
}

});

}, {
threshold:0.2
});

sections.forEach(section => {
observer.observe(section);
});

/* =========================
MINI PLAYER NAVBAR
========================= */

const tracks = [
"assets/audio/Botánico.mp3",
"assets/audio/Amanda.mp3",
"assets/audio/Balconeras.mp3",
"assets/audio/Intrusión.mp3"
];

const trackNames = [
"ALGAS — Botánico",
"ALGAS — Amanda",
"ALGAS — Balconeras",
"ALGAS — Intrusión"
];

let currentTrack = 0;

const audio = document.getElementById("mini-audio");
const playBtn = document.getElementById("mini-play");
const nextBtn = document.getElementById("mini-next");
const title = document.getElementById("mini-title");

if(audio){

audio.src = tracks[currentTrack];
title.textContent = trackNames[currentTrack];

// intento autoplay (puede fallar)
audio.play().catch(() => {
console.log("Autoplay bloqueado");
});

// play / pause
playBtn.addEventListener("click", () => {

if(audio.paused){
audio.play();
playBtn.textContent = "⏸";
}else{
audio.pause();
playBtn.textContent = "▶";
}

});

// siguiente track
nextBtn.addEventListener("click", () => {

currentTrack = (currentTrack + 1) % tracks.length;

audio.src = tracks[currentTrack];
title.textContent = trackNames[currentTrack];

audio.play();
playBtn.textContent = "⏸";

});

}

/* ==========================
SHOW POPUP
========================== */

const modal = document.getElementById("showModal");
const closeModal = document.querySelector(".show-close");

if(modal){

    window.addEventListener("load", () => {
        modal.classList.add("active");
    });

    if(closeModal){

        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
        });

    }

    modal.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.classList.remove("active");
        }

    });

}

/* =========================
   AFICHES — 3D COVERFLOW
========================= */

const posterCarousel = document.querySelector(".posters-carousel");

if(posterCarousel){

  const posterItems =
    posterCarousel.querySelectorAll(".poster");

  const posterPrev =
    posterCarousel.querySelector(".poster-prev");

  const posterNext =
    posterCarousel.querySelector(".poster-next");


  let posterCurrent = 0;

  let posterTouchStartX = 0;
  let posterTouchEndX = 0;

  const posterTotal = posterItems.length;


  /* =========================
     ACTUALIZAR POSICIONES
  ========================= */

  function updatePosters(){

    posterItems.forEach((poster, index) => {

      poster.classList.remove(
        "is-center",
        "is-prev",
        "is-next",
        "is-prev-2",
        "is-next-2",
        "is-hidden"
      );


      let difference =
        index - posterCurrent;


      /*
       * Convertimos la diferencia
       * en una posición circular.
       */

      if(difference > posterTotal / 2){

        difference -= posterTotal;

      }

      if(difference < -posterTotal / 2){

        difference += posterTotal;

      }


      if(difference === 0){

        poster.classList.add("is-center");

      }

      else if(difference === -1){

        poster.classList.add("is-prev");

      }

      else if(difference === 1){

        poster.classList.add("is-next");

      }

      else if(difference === -2){

        poster.classList.add("is-prev-2");

      }

      else if(difference === 2){

        poster.classList.add("is-next-2");

      }

      else{

        poster.classList.add("is-hidden");

      }

    });

  }


  /* =========================
     SIGUIENTE
  ========================= */

  function nextPoster(){

    posterCurrent =
      (posterCurrent + 1) % posterTotal;

    updatePosters();

  }


  /* =========================
     ANTERIOR
  ========================= */

  function previousPoster(){

    posterCurrent =
      (posterCurrent - 1 + posterTotal) %
      posterTotal;

    updatePosters();

  }


  /* =========================
     FLECHAS
  ========================= */

  posterNext.addEventListener(
    "click",
    nextPoster
  );


  posterPrev.addEventListener(
    "click",
    previousPoster
  );


  /* =========================
     CLICK EN LOS LATERALES
  ========================= */

  posterItems.forEach((poster, index) => {

    poster.addEventListener("click", () => {

      if(index === posterCurrent){
        return;
      }

      let difference =
        index - posterCurrent;


      if(difference > posterTotal / 2){
        difference -= posterTotal;
      }

      if(difference < -posterTotal / 2){
        difference += posterTotal;
      }


      if(difference === -1){

        previousPoster();

      }

      else if(difference === 1){

        nextPoster();

      }

    });

  });


  /* =========================
     TOUCH SWIPE
  ========================= */

  posterCarousel.addEventListener(
    "touchstart",
    e => {

      posterTouchStartX =
        e.changedTouches[0].screenX;

    },
    { passive:true }
  );


  posterCarousel.addEventListener(
    "touchend",
    e => {

      posterTouchEndX =
        e.changedTouches[0].screenX;


      const swipeDistance =
        posterTouchEndX - posterTouchStartX;


      if(Math.abs(swipeDistance) < 50){
        return;
      }


      if(swipeDistance < 0){

        nextPoster();

      }else{

        previousPoster();

      }

    },
    { passive:true }
  );


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", e => {

    /*
     * Evitamos interferir con el
     * teclado cuando el usuario
     * está escribiendo.
     */

    const activeElement =
      document.activeElement;

    if(
      activeElement &&
      (
        activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA" ||
        activeElement.tagName === "SELECT"
      )
    ){

      return;

    }


    const rect =
      posterCarousel.getBoundingClientRect();


    const carouselVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0;


    if(!carouselVisible){
      return;
    }


    if(e.key === "ArrowRight"){

      nextPoster();

    }


    if(e.key === "ArrowLeft"){

      previousPoster();

    }

  });


  /* =========================
     INICIALIZAR
  ========================= */

  updatePosters();

}
