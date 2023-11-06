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
            <div v-if="event.showImages" class="text-center pt-3">
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
          time: "04 - 06 November 2022",
          title: "PTZ's 3rd Anniversary",
          description: `Nhat and Gigi are zouk teachers from Austin, Texas with over six years of teaching experience. Throughout their teaching journey, Nhat has completed a teacher training workshop with Bruno Galhardo focusing on the pedagogy of zouk, and Gigi has completed Renata Peçanha's Traditional Brazilian Zouk Teacher Training Program. In 2018, Nhat and Gigi also became part of their teachers’, William Teixeira and Paloma Alves, professional zouk company, WT Company, and are currently studying under them. They also train with Rafael, Izabel, Marck and Melyssa to continue their professional development.`,
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
          time: "03 - 07 August 2022",
          title: "Alisson Sandi",
          description: `Alisson has been an official head judge and an important member for the Brazilian Zouk Dance Council since its first competition event in 2014. And he is one of the founders of the International Zouk Flash Mob/International Zouk Day which has been running yearly since 2012. Alisson loves to push himself and currently holds the following titles:
- 3x Pro World Zouk Champion
- 3x Pro Australian Zouk/Latin Champion
- Winner/Finalist of various BZDC All Stars/Champions Jack and Jill Comps and Invitationals.`,
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
          time: "01 - 10 June 2022",
          title: "Dominik & Monika",
          description: `Our elegant Monika who started dancing from 7 years old, has great foundation in Jazz, Contemporary , latin and ballroom dances. She got into Zouk in 2013. 
Dominik, a full of enery Viking, started his dance career as a hip hop dancer and used to be the male dancer at one of the Polish theatres. In 2021, they passed the certification exam in the MAC project and Monika passed the exam with the best result in the entire history of the project. 
Apart from teaching around the world, this lovely couple is also the first Polish couple teaching Brazilian Zouk in Portuguese in Brazil in 2022, how impressive!!!!!`,
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
