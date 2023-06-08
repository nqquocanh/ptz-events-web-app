<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div>
        <div class="section-title pt-4">EVENTS IN 2022</div>
        <div class="pb-5 pt-4">
          <span class="fs-4 pt-4"
            >Nov 2022 |
            <span class="section-title"> PTZ's 3rd Anniversary</span></span
          >
          <div class="text-left pb-2 py-4">
            <div>
              Welcome to PTZ's 3rd Anniversary with the presence of 02 artists
              coming all the way from Austin, U.S.
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
                    src="@/assets/img/past-events/2022/Nhat Gigi/1.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Nhat Gigi/2.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Nhat Gigi/3.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2022/Nhat Gigi/4.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Nhat Gigi/5.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Nhat Gigi/6.jpg"
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
                      src="https://www.youtube.com/embed/Uweqj43jrkM"
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
        <div class="pb-5">
          <span class="fs-4 pt-4"
            >August 2022 |
            <span class="section-title"> Alisson Sandi</span></span
          >
          <div class="text-left pb-2 py-4">
            <div>It’s happening!!!</div>
            <div>
              Alisson Sandi - 3x World Champion - came to Hanoi in the first
              week of August. We had in total 25 hours of workshops and parties
              with him and zoukers from abroad
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
                    src="@/assets/img/past-events/2022/Alisson Sandi/1.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Alisson Sandi/2.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Alisson Sandi/3.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2022/Alisson Sandi/4.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Alisson Sandi/5.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Alisson Sandi/6.jpg"
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
                      src="https://www.youtube.com/embed/8bRXYB9qHv4"
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
        <div class="pb-5">
          <span class="fs-4 pt-4"
            >June 2022 |
            <span class="section-title"> Dominik & Monika</span></span
          >
          <div class="text-left pb-2 py-4">
            <div>
              Our special event in June in Hanoi, Vietnam to host the one of the
              most beautiful and kindest couples from Poland: Dominik & Monika
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
                    src="@/assets/img/past-events/2022/Dominik Monika/1.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Dominik Monika/2.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Dominik Monika/3.jpg"
                    class="w-100"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4" md="6" sm="6">
                  <img
                    src="@/assets/img/past-events/2022/Dominik Monika/4.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Dominik Monika/5.jpg"
                    class="w-100"
                  />
                </b-col>
                <b-col lg="4" md="4" sm="6" class="mb-3">
                  <img
                    src="@/assets/img/past-events/2022/Dominik Monika/6.jpg"
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
                      src="https://www.youtube.com/embed/KgRUyMd0Xis"
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
