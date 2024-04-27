window.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  (() => {
    const overlay = document.querySelector('.header__opened-menu');
    const openBtn = document.querySelector('.header__burger-container');
    const closeBtn = document.querySelector('.header__close-menu');
    const showMenu = document.querySelector('.header__opened-menu');

    openBtn.addEventListener('click', () => {
      showMenu.classList.add('visible');
    });

    closeBtn.addEventListener('click', () => {
      showMenu.classList.remove('visible');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        showMenu.classList.remove('visible');
      }
    });
  })();

  // Gallery
  (() => {
    new Swiper('.section-memes-gallery__gallery-first', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
    });

    new Swiper('.section-memes-gallery__gallery-second', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 3000,
        reverseDirection: true,
      },
    });

    new Swiper('.section-tokenomics__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
    });
  })();

  // Audio and hide intro screen
  (() => {
    const audioNode = document.getElementById('audio');
    const audioBtns = Array.from(
      document.querySelectorAll('.header__music-btn'),
    );
    const introScreen = document.querySelector('.intro-screen');

    audioNode.volume = 0.3;

    const handler = () => {
      if (audioNode.paused) {
        audioNode.play();
        audioBtns.forEach((node) => node.classList.remove('disabled'));
      } else {
        audioNode.pause();
        audioBtns.forEach((node) => node.classList.add('disabled'));
      }
    };

    audioBtns.forEach((node) => node.addEventListener('click', handler));

    setTimeout(() => {
      introScreen.classList.add('hidden');
    }, 3000);
  })();

  // Copy token
  (() => {
    const copyBtn = document.querySelector('.section-tokenomics__copy-btn');

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(copyBtn.getAttribute('data-token'));
    });
  })();

  // Eyes
  (() => {
    // const pupils = document.querySelectorAll('.section-header__eyes img');
    const pupils = document.querySelectorAll('.s-intro__duck-eues');

    window.addEventListener('mousemove', (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x =
          Math.max(Math.min((e.pageX - rect.left) / 30, 10), -10) + 'px';
        const y = Math.max(Math.min((e.pageY - rect.top) / 30, 10), -10) + 'px';

        pupil.style.transform = 'translate3d(' + x + ',' + y + ', 0px)';
      });
    });
  })();
});
