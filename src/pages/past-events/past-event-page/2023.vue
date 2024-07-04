<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">EVENTS IN 2023</div>
      <div v-for="event in pastEventsInfo" :key="event.key">
        <div class="pb-5 pt-4">
          <span class="fs-4 pt-4"
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
                  <div class="d-flex">
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
          time: "01 - 08 December 2023",
          title: "Lambada into BraZouk",
          description: `With over 15 years of teaching and directing The Ramalhos dance school, Rodrigo is a true expert in his craft. Zouk has been a lifelong passion, and Rodrigo has graced stages worldwide, sharing his expertise in some of the most prestigious events. Now, he annually hosts one of the biggest Zouk events in the heart of Rio de Janeiro! Get ready for an unforgettable Zouk experience with Rodrigo's infectious energy and unparalleled dance mastery. Meet Jaqueline Rangel, our Pilates Master and movement maestro! With a background as one of Cirque Du Soleil’s movement coaches, Jaqueline brings a wealth of expertise to the dance floor. As a certified Pilates instructor, she has shared her knowledge around the globe, making her a special educator of mind-body movement. Get ready to elevate your dance skills with Jaqueline's unique blend of precision, strength, and grace.`,
          imgSrc1: require("@/assets/img/past-events/2023/Lambada into BraZouk/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2023/Lambada into BraZouk/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2023/Lambada into BraZouk/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2023/Lambada into BraZouk/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2023/Lambada into BraZouk/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2023/Lambada into BraZouk/6.jpg"),
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
