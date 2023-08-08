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
          <div class="text-left pb-2 py-4">
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
                  <ul class="navbar-nav">
                    <li class="nav-item">
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
                    </li>
                    <li class="nav-item" @click="handleVideo">
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
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div v-if="event.showImages" class="text-center pt-3">
              <b-row>
                <b-col lg="4" md="6" sm="6" v-for="i in 6" :key="i">
                  <img :src="event[`imgSrc${i}`]" class="w-100 py-2" />
                </b-col>
              </b-row>
            </div>
            <div
              v-if="event.showVideos"
              v-html="event.videoUrl"
              class="text-center pt-3 w-full"
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
          time: "28-30 June 2023",
          title: "It's Afro Time",
          description: `There's nothing more CHILLING than a summer weekend to "let go of
              all deadlines", relax your whole body & spirit to immerse yourself
              in dances, and Brazilian & African melodies with the PTZ community
              right in the heart of Hanoi city!`,
          imgSrc1: require("@/assets/img/past-events/2023/It's Afro Time/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2023/It's Afro Time/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2023/It's Afro Time/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2023/It's Afro Time/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2023/It's Afro Time/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2023/It's Afro Time/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 2,
          time: "14-17 April 2023",
          title: "Zouk It Up with The Masters",
          description: `For the first time, we have 03 Brazilian masters in an event
              hosted by PTZ. For the first time, we will be spending all the time dancing,
              chilling, having fun in a beautiful resort in Hanoi. For the first time, the event will be spinned by top-notch DJs in
              the region`,
          imgSrc1: require("@/assets/img/past-events/2023/ZIU With the Masters/image01.jpg"),
          imgSrc2: require("@/assets/img/past-events/2023/ZIU With the Masters/image02.jpg"),
          imgSrc3: require("@/assets/img/past-events/2023/ZIU With the Masters/image03.jpg"),
          imgSrc4: require("@/assets/img/past-events/2023/ZIU With the Masters/image04.jpg"),
          imgSrc5: require("@/assets/img/past-events/2023/ZIU With the Masters/image05.jpg"),
          imgSrc6: require("@/assets/img/past-events/2023/ZIU With the Masters/image06.jpg"),
          videoUrl: `<iframe width="560"
                      height="315"
                      src="https://www.youtube.com/embed/H3Ktc2M1Mi4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>`,
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
