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
          time: "18 - 22 August 2023",
          title: "Romance & Joy with BraZouk & Lambada",
          description: `Friends and part of the same dance team since 2008, Juliana Lima and Rafael Pitarello became official dance partners in 2011 and started to develop different choreographs and projects since then, including being part of important events and festivals, and also teaching regular classes in different dance schools in São Paulo.
In 2016, they moved to Brisbane – Australia, where they have been promoting and strengthening the Brazilian dance culture, with an emphasis on Samba de Gafieira, Brazilian Zouk, Bolero and Forró, at different events and as part of the Rio Rhythmics Latin Dance Academy team. In 2019, they had the opportunity to teach and perform in different events in Germany and the Netherlands teaching workshops and performing Samba de Gafieira and Brazilian Zouk`,
          imgSrc1: require("@/assets/img/past-events/2023/Rafael Juliana/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2023/Rafael Juliana/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2023/Rafael Juliana/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2023/Rafael Juliana/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2023/Rafael Juliana/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2023/Rafael Juliana/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 2,
          time: "02 - 05 August 2023",
          title: "Fly with Lambada",
          description: `All the foundation techniques, the advanced
                combos and the wifi game of Lambada will be shared at our event
                - "Fly with Lambada Sensation" with the presence of the 2 top
                Artists - Gilson and Mailys. Gilson who is regarded as the "Lambada Guru” has spent a lot of time and dedication to sharing his passion with Lambada around the world through different roles such as dancer, dance instructor, or jury of many Zouk events and congresses in Europe such as Barcelona, London, Prague, Berlin... to Brazil or Asian countries such as Korea, Japan and the event of PTZ in Hanoi in 2019. Mailys who is Gilson's Brazilian Zouk dance partner from 2021 until now is a multi-talented girl with a solid background in music and art. She started her career as a Pop singer with excellent dancing ability and won many awards. She was later known as a choreographer and dancer and continues to pursue her career as a Brazilian Zouk artist`,
          imgSrc1: require("@/assets/img/past-events/2023/Fly with Lambada/1.jpg"),
          imgSrc2: require("@/assets/img/past-events/2023/Fly with Lambada/2.jpg"),
          imgSrc3: require("@/assets/img/past-events/2023/Fly with Lambada/3.jpg"),
          imgSrc4: require("@/assets/img/past-events/2023/Fly with Lambada/4.jpg"),
          imgSrc5: require("@/assets/img/past-events/2023/Fly with Lambada/5.jpg"),
          imgSrc6: require("@/assets/img/past-events/2023/Fly with Lambada/6.jpg"),
          showImages: true,
          showVideos: false,
        },
        {
          key: 3,
          time: "28 - 30 June 2023",
          title: "It's Afro Time",
          description: `There's nothing more CHILLING than a summer weekend to "let go of
              all deadlines", relax your whole body & spirit to immerse yourself
              in dances, and Brazilian & African melodies with the PTZ community
              right in the heart of Hanoi city!
               It's Alfro time, led by Jules Bertrand Nouyadjam - a dance teacher, performer, choreographer and a real DJ! Jules is originally from Cameroon - the land of wild African dances and is an enthusiast of both Kizomba and Zouk, he brought surprises with the interesting combination!`,
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
          key: 4,
          time: "14 - 17 April 2023",
          title: "Zouk It Up with The Masters",
          description: `For the first time, we have 03 Brazilian masters in an event
              hosted by PTZ. For the first time, we will be spending all the time dancing,
              chilling, having fun in a beautiful resort in Hanoi. For the first time, the event will be spinned by top-notch DJs in
              the region.
              Alisson has a passion for teaching and is always striving for innovative ways in which to overcome technical and personal challenges. He is known for his attention to detail and effective instruction in dance techniques.
              Brenda has been dancing professionally since she was 20. She is an international artist, multidisciplinary researcher and researcher of movement. Using dance as a tool for self-knowledge, healing and self-awareness, she experiences and inspires people around the world to get in touch with their state of presence, connection, flow, grace and power.
              became a reference in the execution of clean, comfortable fundamentals and its understanding of close connection, both from a physical and mental perspectives. Gui is also one of the regular instructors of Alex de Carvalho’s MAC program, where he teaches new instructors how to learn, talk about and teach connection.
              `,
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
