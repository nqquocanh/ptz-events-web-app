<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">EVENTS IN 2025</div>
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
          time: "25 Feb - 4 Mar 2025",
          title: "Learn Brazilian Zouk with Nhat & Gigi",
          description: `With over 8 years of teaching experience, Nhat & Gigi are passionate about growing the Zouk community worldwide. They’ve trained under legendary instructors like Bruno Galhardo, Renata Peçanha, and William & Paloma. Their expertise spans Brazilian Zouk & Lambada, and they’ve taught at top international festivals including Madrid Zouk Bachata Congress, Canada Zouk Congress, ZoukMX, and Brazouky Vietnam!
In 2024, Nhat won first place at Poland's biggest Lambada Jack & Jill competition - proof of their incredible skill and dedication.`,
          imgSrc1: require("@/assets/img/past-events/2025/Nhat Gigi/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2025/Nhat Gigi/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2025/Nhat Gigi/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2025/Nhat Gigi/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2025/Nhat Gigi/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2025/Nhat Gigi/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 2,
          time: "7 Apr - 14 Apr 2025",
          title:
            "Léo Gomes - Brazilian Zouk Regular Class and Lambada Intensive",
          description: `We had a wonderful experience with Léo Gomes, a
                world-renowned figure in Brazilian Zouk and Lambada! His
                artistry, innovation, and passion have shaped the dance scene
                both nationally and internationally. As a two-time World Lambada
                Champion, Léo brings plenty of knowledge and energy to every
                class.`,
          imgSrc1: require("@/assets/img/past-events/2025/Leo Gomes/Leo Gomes1.jpg"),
          imgSrc2: "",
          imgSrc3: "",
          imgSrc4: "",
          imgSrc5: "",
          imgSrc6: "",
          showImages: true,
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
