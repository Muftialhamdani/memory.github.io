new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/Painting11.jpg",
          img2: "images/painting12.jpg",
          img3: "images/Painting13.jpg",
          title: "Painting date",
          isOpen: false,
        },
        {
          img1: "images/Movie1.jpg",
          img2: "images/Movie2.jpg",
          img3: "images/Movie3.jpg",
          title: "Movie date",
          isOpen: false,
        },
        {
          img1: "images/Braga1.jpg",
          img2: "images/Braga2.jpg",
          img3: "images/Braga3.jpg",
          title: "Braga date",
          isOpen: false,
        },
        {
          img1: "images/Mixue1.jpg",
          img2: "images/Mixue2.jpg",
          img3: "images/Mixue3.jpg",
          title: "Mixue date",
          isOpen: false,
        },
        {
          img1: "images/Makeup1.jpg",
          img2: "images/Makeup2.jpg",
          img3: "images/Makeup3.jpg",
          title: "Makeup date",
          isOpen: false,
        },
        {
          img1: "images/RM1.jpg",
          img2: "images/RM2.jpg",
          img3: "images/RM3.jpg",
          title: "Ilove u Alwasy",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
