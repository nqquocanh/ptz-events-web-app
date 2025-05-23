<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">EVENTS IN 2024</div>
      <div v-for="event in pastEventsInfo" :key="event.key">
        <div class="pb-5 pt-4">
          <span class="fs-4 pt-4 section-sub-title"
            >{{ event.time }} |
            <span class="section-title">{{ event.title }}</span></span
          >
          <div class="text-left pb-2 py-4 text-justify">
            <div>{{ event.description }}</div>
          </div>
          <div class="card pb-2">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <div
                  class="collapse navbar-collapse d-flex justify-content-between"
                  id="navbarNav"
                >
                  <div>
                    <div class="fs-4 py-2 font-weight-bold">GALLERY</div>
                  </div>
                  <div class="d-flex gap-4">
                    <div class="nav-item">
                      <a
                        class="nav-link font-weight-bold"
                        @click="
                          event.showImages = true;
                          event.showVideos = false;
                        "
                        href="#!"
                      >
                        IMAGES
                      </a>
                    </div>
                    <div class="nav-item" @click="handleVideo">
                      <a
                        class="nav-link font-weight-bold"
                        @click="
                          event.showVideos = true;
                          event.showImages = false;
                        "
                        href="#!"
                      >
                        VIDEOS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div v-if="event.showImages" class="text-center pt-3 w-100">
              <b-row class="column-width">
                <b-col lg="4" md="6" sm="6" v-for="i in 6" :key="i">
                  <img :src="event[`imgSrc${i}`]" class="w-100 py-2" />
                </b-col>
              </b-row>
            </div>
            <div
              v-if="event.showVideos"
              v-html="event.videoUrl"
              class="text-center pt-3 w-full embed-responsive embed-responsive-16by9"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PastEvents",
  data: function () {
    return {
      showImages: true,
      showVideos: false,
      test: "test",
      pastEventsInfo: [
        {
          key: 1,
          time: "6-9 June 2024",
          title: "BraZouky Vietnam 1st edition",
          description: `What an incredible time we had at BraZouky Vietnam! From the warm-up workshop and pre-party to the intensive workshops and vibrant social nights, every moment was filled with energy, passion, and unforgettable dance experiences. For the first time in Vietnam we had the pleasure welcoming a dozen of top-notched international artists such as Alex de Carvalho, Arthur Santos, Alisson & Christina, Mika & Vic, Dominik & Monika and Nhat & Gigi. The artists not only delivered insighful workshops and intensive courses, but also made the dancefloor crowded and on-fire with their social dancing. The event also featured best DJs in the region, namely DJ Nhat, DJ Berries, DJ Gigi, DJ AnhQ, DJ TK and DJ Adell. BraZouky Vietnam ended with an unforgettable, refreshing, joyful and fun pool party. A huge thank you to all participants, artists, and organizers for making this a memorable celebration of Brazilian Zouk in Vietnam. Until next time, keep dancing and spreading the Zouk love!`,
          imgSrc1: require("@/assets/img/past-events/2024/Brazouky/a.jpg"),
          imgSrc2: require("@/assets/img/past-events/2024/Brazouky/b.jpg"),
          imgSrc3: require("@/assets/img/past-events/2024/Brazouky/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2024/Brazouky/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2024/Brazouky/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2024/Brazouky/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 2,
          time: "15 June 2024",
          title: "Gigi & Nhat Weekender in Hanoi",
          description: `Had an incredible weekend in Hanoi, Vietnam with Gigi & Nhat. All the way from the US, they brought their renowned captivating performances and exceptional teaching skills in the Brazilian Zouk community to PTZ and to the Hanoi community for the second time. With years of experience, they delivered in-depth workshops focusing on musicality, connection, and technique. Participants were thrilled with the personalized guidance and vibrant social dance sessions`,
          imgSrc1: require("@/assets/img/past-events/2024/Nhat Gigi Weekender/1.jpg"),
          imgSrc2: "",
          imgSrc3: "",
          imgSrc4: "",
          imgSrc5: "",
          imgSrc6: "",
          showImages: true,
          showVideos: false,
        },
        {
          key: 3,
          time: "21 - 26 August, 2024",
          title: "Brazilian Zouk - Luan & Adriana",
          description: `Luan & Adriana bring 15 years of ballroom dancing experience to their teaching. They are highly respected Zouk instructors at both national and international congresses. They are two-time World Lambada champions, Brazilian Latin Dance champions, and Regional Ballroom Dancing champions. Additionally, they serve as coaches, speakers, and emotional intelligence trainers at the Lyouman Institute, and are the creative minds behind several notable initiatives integrating dance and emotional intelligence.`,
          videoUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/RugL964xH0k?si=bS7zuU0fuAHwaGUf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          imgSrc1: require("@/assets/img/past-events/2024/Luan Adriana/Luan-Adriana-1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2024/Luan Adriana/Luan-Adriana-2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2024/Luan Adriana/Luan-Adriana-3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2024/Luan Adriana/Luan-Adriana-4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2024/Luan Adriana/Luan-Adriana-5.jpg"),
          imgSrc6: "",
          showImages: true,
          showVideos: false,
        },
        {
          key: 4,
          time: "18 Sep - 1 Oct, 2024",
          title: "Lambada Fever Zero To Hero",
          description: `Ariel & Letícia are
                internationally renowned performers who have taught at major
                dance events worldwide. Learning from them is an incredible
                opportunity to elevate lambada skills and style.`,
          videoUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t3fSYHz_TiE?si=IWVsOSfCNvbDlBjy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          imgSrc1: require("@/assets/img/past-events/2024/Ariel Leticia/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2024/Ariel Leticia/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2024/Ariel Leticia/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2024/Ariel Leticia/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2024/Ariel Leticia/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2024/Ariel Leticia/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 5,
          time: "06 Nov - 13 Nov, 2024",
          title: "Zouk With Léo Neves",
          description: `With 20 years of experience in the dance world, Léo began his journey at just 8 years old and discovered his passion for Zouk at 12. Now, he’s known internationally for his skill, technique, and unique style - and he’s coming to share it with us at PTZ!`,
          videoUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q1QnX98iK5Y?si=k2oKL-uCpi-p7B6V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          imgSrc1: require("@/assets/img/past-events/2024/Leo/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2024/Leo/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2024/Leo/4.jpg"),
          imgSrc4: require("@/assets/img/past-events/2024/Leo/3.jpg"),
          imgSrc5: "",
          imgSrc6: "",
          showImages: true,
          showVideos: false,
        },
        {
          key: 6,
          time: "2024",
          title: "Summary of 2024",
          description: `A vibrant and brilliant 2024 with many memorable events and workshops! From exciting classes, "burning the floor" parties to workshops with international artists, all have created a full year full of emotions.
 PTZ wishes you a peaceful, happy and joyful Christmas with family and friends. Thank you for being a part of this journey, and we will see you again in 2025 with even more explosive experiences! Watch the 2024 recap video now and look back at the special moments that have created the wonderful "PTZ family"!`,
          videoUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VVzxV_M6mo8?si=NR4qmP2r3N18mhYu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          imgSrc1: "",
          imgSrc2: "",
          imgSrc3: "",
          imgSrc4: "",
          imgSrc5: "",
          imgSrc6: "",
          showImages: false,
          showVideos: true,
        },
      ],
    };
  },
  methods: {
    handleVideo() {
      this.showVideos = true;
      this.showImages = false;
    },
    handleImage() {
      this.showImages = true;
      this.showVideos = false;
    },
  },
  computed: {
    eventImages() {
      return this.pastEventsInfo.map((event) => [
        event.imgSrc1,
        event.imgSrc2,
        event.imgSrc3,
        event.imgSrc4,
        event.imgSrc5,
        event.imgSrc6,
      ]);
    },
  },
};
</script>
