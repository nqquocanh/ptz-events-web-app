<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">EVENTS IN 2022</div>
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
          title: "PTZ's 3rd Anniversary",
          description: `Welcome to PTZ's 3rd Anniversary with the presence of 02 artists
              coming all the way from Austin, U.S.`,
          imgSrc1: require("@/assets/img/past-events/2022/Nhat Gigi/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2022/Nhat Gigi/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2022/Nhat Gigi/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2022/Nhat Gigi/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2022/Nhat Gigi/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2022/Nhat Gigi/6.jpg"),
          videoUrl: `<iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/HU9wRJLFAEY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>`,
          showImages: true,
          showVideos: false,
        },
        {
          key: 2,
          time: "August 2022",
          title: "Alisson Sandi",
          description: `Alisson Sandi - 3x World Champion - came to Hanoi in the first
              week of August. We had in total 25 hours of workshops and parties
              with him and zoukers from abroad`,
          imgSrc1: require("@/assets/img/past-events/2022/Alisson Sandi/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2022/Alisson Sandi/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2022/Alisson Sandi/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2022/Alisson Sandi/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2022/Alisson Sandi/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2022/Alisson Sandi/6.jpg"),
          videoUrl: `<iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/8bRXYB9qHv4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>`,
          showImages: true,
          showVideos: false,
        },
        {
          key: 3,
          time: "June 2022",
          title: "Dominik & Monika",
          description: `Our special event in June in Hanoi, Vietnam to host the one of the
              most beautiful and kindest couples from Poland: Dominik & Monika`,
          imgSrc1: require("@/assets/img/past-events/2022/Dominik Monika/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2022/Dominik Monika/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2022/Dominik Monika/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2022/Dominik Monika/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2022/Dominik Monika/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2022/Dominik Monika/6.jpg"),
          videoUrl: `<iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/KgRUyMd0Xis"
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
