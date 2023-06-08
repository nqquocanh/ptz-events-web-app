<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div>
        <div class="section-title pt-4">EVENTS IN 2023</div>
        <div class="pb-5 pt-4">
          <span class="fs-4 pt-4"
            >28-30 June 2023 |
            <span class="section-title"> It's Afro Time</span></span
          >
          <div class="text-left pb-2 py-4">
            <div>
              There's nothing more CHILLING than a summer weekend to "let go of
              all deadlines", relax your whole body & spirit to immerse yourself
              in dances, and Brazilian & African melodies with the PTZ community
              right in the heart of Hanoi city!
            </div>
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
                        @click="handleImage"
                        href="#"
                        >IMAGES</a
                      >
                    </li>
                    <li class="nav-item" @click="handleVideo">
                      <a class="nav-link font-weight-bold" href="#">VIDEOS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div v-if="showImages" class="text-center pt-3">
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/1.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/2.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/3.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/4.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/5.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/6.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
            </div>
            <div v-if="showVideos" class="text-center pt-3">
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/1.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/2.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/3.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/4.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/5.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/It's Afro Time/6.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
        <div class="pb-5">
          <span class="fs-4 pt-4"
            >14-17 April 2023 |
            <span class="section-title">
              Zouk It Up with The Masters</span
            ></span
          >
          <div class="text-left pb-2 py-4">
            <div>It’s happening!!!</div>
            <div>
              For the first time, we have 03 Brazilian masters in an event
              hosted by PTZ;
            </div>
            <div>
              For the first time, we will be spending all the time dancing,
              chilling, having fun in a beautiful resort in Hanoi
            </div>
            <div>
              For the first time, the event will be spinned by top-notch DJs in
              the region
            </div>
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
                        @click="handleImage"
                        href="#"
                        >IMAGES</a
                      >
                    </li>
                    <li class="nav-item" @click="handleVideo">
                      <a class="nav-link font-weight-bold" href="#">VIDEOS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div v-if="showImages" class="text-center pt-3">
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image01.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image02.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image03.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image04.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image05.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2023/ZIU With the Masters/image06.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
            </div>
            <div v-if="showVideos" class="activities-content text-center pt-3">
              <b-row class="column-width">
                <b-col lg="12" md="12" sm="12">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/H3Ktc2M1Mi4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </b-col>
              </b-row>
            </div>
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
          title: "Zouk It Up with the Masters",
          time: "2023",
          link: "/past-event-1",
        },
        {
          key: 2,
          title: "Past Events 2",
          time: "2023",
          link: "/past-event-2",
        },
        {
          key: 3,
          title: "Past Events 3",
          time: "2023",
          link: "/past-event-3",
        },
        {
          key: 4,
          title: "Past Events 4",
          time: "2023",
          link: "/past-event-4",
        },
      ],
    };
  },
  methods: {
    renderPastEvents() {
      for (let i = 0; i < this.pastEventsInfo.length; i++) {
        const event = this.pastEventsInfo[i];
        console.log(event.title, event.time);
      }
    },
    handleVideo() {
      (this.showVideos = true), (this.showImages = false);
    },
    handleImage() {
      (this.showImages = true), (this.showVideos = false);
    },
  },
  mounted() {
    this.renderPastEvents;
  },
};
</script>
