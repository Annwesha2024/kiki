alert("HAPPY BIRTHDAY TO YOU, MY DEAR FRIEND! 🎉\n\n" +"Shon ami oto janina tai this is a small surprise for u and wish you the best 💕💕")

new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/cat couple.jpg",
          img2: "images/cat couple2.jpg",
          img3: "images/cat couple3.jpg",
          title: "BESTIES FOREVER 🐾",
          isOpen: false,
        },
        {
          img1: "images/cat cute.jpg",
          img2: "images/cat cute 2.jpg",
          img3: "images/cat cute 3.jpg",
          title: "CUTIE GANG 😻",
          isOpen: false,
        },
        {
          img1: "images/cat baby2.jpg",
          img2: "images/cat baby.jpg",
          img3: "images/cat baby3.jpg",
          title: "BABY BUDDIES 🍼",
          isOpen: false,
        },
        {
          img1: "images/cat sleep.jpg",
          img2: "images/cat sleep2.jpg",
          img3: "images/cat sleep 3.jpg",
          title: "NAP SQUAD 😴",
          isOpen: false,
        },
        {
          img1: "images/CAT HERO1.jpg",
          img2: "images/cat hero2.jpg",
          img3: "images/cat hero3.jpg",
          title: "LITTLE HEROES 💪",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    // Toggle the top album cover open/close
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    // Toggle a page open/close only if top album is open
    open(idx, isOpen) {
      if (!this.isOpenedTop) return;
      if (idx >= 0 && idx < this.items.length) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    // Close all pages and close top album cover
    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
const audio = document.getElementById('background-audio');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

audio.volume = 1; // default max volume

// Play audio on first user interaction to bypass autoplay restrictions
function playAudioOnUserAction() {
  audio.play().catch((e) => {
    console.log("Autoplay prevented, user interaction needed.", e);
  });
  window.removeEventListener('click', playAudioOnUserAction);
}
window.addEventListener('click', playAudioOnUserAction);

// Mute/Unmute on icon click
volumeIcon.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeIcon.textContent = audio.muted ? '🔇' : '🔊';
  volumeSlider.value = audio.muted ? 0 : audio.volume;
});

// Volume slider change
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
  audio.muted = audio.volume === 0;
  volumeIcon.textContent = audio.muted ? '🔇' : '🔊';
});
