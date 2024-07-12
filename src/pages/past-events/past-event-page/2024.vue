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
      pastEventsInfo: [
        {
          key: 1,
          time: "6-9 June 2024",
          title: "BraZouky Vietnam 1st edition",
          description: `What an incredible time we had at BraZouky Vietnam! From the warm-up workshop and pre-party to the intensive workshops and vibrant social nights, every moment was filled with energy, passion, and unforgettable dance experiences. For the first time in Vietnam we had the pleasure welcoming a dozen of top-notched international artists such as Alex de Carvalho, Arthur Santos, Alisson & Christina, Mika & Vic, Dominik & Monika and Nhat & Gigi. The artists not only delivered insighful workshops and intensive courses, but also made the dancefloor crowded and on-fire with their social dancing. The event also featured best DJs in the region, namely DJ Nhat, DJ Berries, DJ Gigi, DJ AnhQ, DJ TK and DJ Adell. BraZouky Vietnam ended with an unforgettable, refreshing, joyful and fun pool party. A huge thank you to all participants, artists, and organizers for making this a memorable celebration of Brazilian Zouk in Vietnam. Until next time, keep dancing and spreading the Zouk love!`,
          imgSrc1: require("@/assets/img/past-events/2024/Nhat Gigi Weekender/1.jpg"),
          imgSrc2: "",
          imgSrc3: "",
          imgSrc4: "",
          imgSrc5: "",
          imgSrc6: require("@/assets/img/past-events/2024/Brazouky/6.jpg"),
          // imgSrc1: require("@/assets/img/past-events/2024/Brazouky/1.jpg"),
          // imgSrc2: require("@/assets/img/past-events/2024/Brazouky/2.jpg"),
          // imgSrc3: require("@/assets/img/past-events/2024/Brazouky/3.jpg"),
          // imgSrc4: require("@/assets/img/past-events/2024/Brazouky/4.jpg"),
          // imgSrc5: require("@/assets/img/past-events/2024/Brazouky/5.jpg"),
          // imgSrc6: require("@/assets/img/past-events/2024/Brazouky/6.jpg"),
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
