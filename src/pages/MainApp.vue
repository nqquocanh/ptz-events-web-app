<template>
  <div>
    <div class="text-white text-align-center">
      <div
        class="position-absolute title-banner"
        style="top: 50%; left: 30%; transform: translate(-50%, -50%)"
      >
        <div style="width: 180%">
          <div class="fw-bold p-2" style="font-family: Arial">
            PTZ - DANCE YOUR WAY
          </div>
          <div class="sub-banner-title">
            <div class="fw-bold pt-2" style="font-family: Arial">
              PIONEERING BRAZILIAN ZOUK STUDIO
            </div>
            <div class="fw-bold" style="font-family: Arial">IN VIETNAM</div>
          </div>

          <!-- <div class="fs-4 p-2">
            Don't miss our upcoming dance
            <a
              class="bg-white py-1 px-2"
              href="/upcoming-event"
              style="color: #b867cc"
              >event</a
            >
          </div> -->
          <br />
          <!-- <div class="fs-5">7 Apr - 14 Apr 2025</div> -->
          <br />
        </div>
      </div>
      <img class="main-banner" />
    </div>
    <div class="body-container">
      <!-- <UpcomingEvents /> -->
      <div class="mb-8 mt-24">
        <img
          src="../assets/img/upcoming-events/coming-soon.jpg"
          style="width: 100%"
          class="relative mt-5"
        />
        <div
          class="absolute text-white fs-2 coming-soon"
          style="margin-top: -5rem; margin-bottom: 3rem"
        >
          Don't miss our next dance event!
        </div>
      </div>
      <hr />
      <div id="about-ptz-section">
        <div class="section-title">ABOUT PTZ</div>
        <div class="about-ptz-container">
          <div style="text-align: justify">
            <div class="section-text my-4">
              PTZ - Phuong & Trang Zouk Vietnam - is the leading studio for
              Brazilian Zouk in Hanoi, Vietnam. Founded in 2019, PTZ has been on
              the forefront of spreading Brazilian Zouk in the local community.
              PTZ offers weekly classes, social dancing and periodic Brazilian
              Zouk events. Our syllabus is regularly updated to keep abreast
              with the latest developments in the world. Our parties are spinned
              live and non-stop by our local DJs.
            </div>
            <div class="section-text my-4">
              PTZ's iconic event - Zouk It Up - has been up and running since
              2022. We have hosted Dominik and Monika, Alisson Sandi, and Nhat
              Ho and Gigi Ho. In 2023, we will be welcoming Alisson Sandi,
              Brenda and Gui in April and more artists in July and November.
              Before that, our founders, Hoai Phuong and Huyen Trang, have been
              hosting various Brazilian Zouk artists in Hanoi, such as Alisson
              Sandi - 4 times, Arthur and Layssa, Brenda and Anderson, and
              Gilson Damasco. We are committed to organizing the best events in
              town with internationally recognized artists to promote Brazilian
              Zouk in Hanoi, Vietnam.
            </div>
            <MainPageCarouselVue />
            <div class="section-text my-4">
              Hoai Phuong and Huyen Trang started their partnership in late
              2017. We are a couple of Friday night and Sunday morning. Trang is
              like a Friday night – always dynamic, vibrant, full of life with a
              beautiful smile on her face and very nice pose whenever she
              dances. Phuong is like a Sunday morning with a hot black coffee –
              slow to start, taking time to filter, but when the caffeine kicks
              in, he rocks as both a DJ and a dancer. That’s the way the
              partnership has gone over the past 5++ years.
            </div>
            <div class="section-text my-4">
              Phuong and Trang won their first international trophy in 2018 with
              the 2nd place in the ProAm Competition at ZoukSEA. Since then,
              they have been performing and teaching in various congresses, both
              nationally, such as the Vietnam Latin Xperience, the Vietnam
              International Latin Festival, and internationally, like
              ZoukSensation and the 1st China Zouk Congress in Shanghai. Phuong
              and Trang have also attended various Zouk congresses abroad where
              they promoted Zouk in Vietnam and also invited reputational
              artists to teach in the country, such as BDF - Brazilian Dance
              Festival - in Amsterdam, Brazuky Australia, Helsinki Zouk
              Festival, Zouk Sensation, ZoukSEA, to name a few.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="code-of-conduct-section">
        <div class="section-title">CODE OF CONDUCT</div>
        <div class="code-of-conduct-container">
          <div style="text-align: justify">
            <div class="section-text my-4">
              At PTZ, we are committed to providing a safe, friendly and
              welcoming environment for everyone. To help make that vision a
              reality, we’ve created the Code of Conduct - a simple and clear
              guide that everyone can read and follow during our classes and
              events. It’s our way of making sure every participant feels
              respected, supported, and inspired to be their best.
            </div>
          </div>
        </div>
        <div class="text-center pt-3 w-100">
          <b-row class="column-width">
            <b-col
              lg="4"
              md="6"
              sm="6"
              v-for="(imgSrc, index) in codeOfConduct"
              :key="index"
            >
              <img :src="imgSrc" class="w-100 py-2" />
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainPageCarouselVue from "@/components/carousel/MainPageCarousel.vue";
// import UpcomingEvents from "./upcoming-events/UpcomingEvents.vue";
export default {
  components: {
    MainPageCarouselVue,
    // UpcomingEvents,
  },
  name: "MainApp",
  data: function () {
    return {
      codeOfConduct: [
        require("@/assets/img/code-of-conduct/code-of-conduct-1.jpg"),
        require("@/assets/img/code-of-conduct/code-of-conduct-2.jpg"),
        require("@/assets/img/code-of-conduct/code-of-conduct-3.jpg"),
      ],
    };
  },
  methods: {
    getImgSrc(code, index) {
      return code[`imgSrc${index + 1}`];
    },
  },
};
</script>
