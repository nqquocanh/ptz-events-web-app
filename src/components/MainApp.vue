<template>
  <div>
    <header>
      <div class="main-banner-container">
        <img
          class="main-banner-img"
          src="https://www.shutterstock.com/image-photo/social-dance-bachata-kizomba-zouk-600w-1419089180.jpg"
        />
        <div class="main-banner-title">
          <div>
            <span>ZOUK IT UP WITH THE MASTERS</span>
          </div>
          <countdown :time="90 * 24 * 60 * 60 * 1000">
            <template slot-scope="props"
              >Time Remaining：{{ props.days }} days, {{ props.hours }} hours,
              {{ props.minutes }} minutes,
              {{ props.seconds }} seconds.</template
            >
          </countdown>
          <!-- <countdown-clock /> -->
          <div class="main-banner-subtitle">
            <span>2023 APRIL 14,15,16,17</span>
          </div>
        </div>
        <div class="nav-bar">
          <a class="nav-bar-item" href="#schedule-section">Schedule</a>
          <a class="nav-bar-item" href="#venue-section">Venue</a>
          <a class="nav-bar-item" href="#passes-section">Passes</a>
          <a class="nav-bar-item" href="#artists-section">Artists</a>
          <a class="nav-bar-item" href="#about-ptz-section">About PTZ</a>
        </div>
      </div>
      <hr />
    </header>

    <body class="body-container">
      <div>
        <div class="quick-intro-section">
          <div>
            <div class="section-title">WELCOME TO HANOI!</div>
            <div class="quick-intro-content">
              <div class="quick-intro-text">
                Taking place at a wonderful resort which is about 1-hour drive
                from Hanoi centre, the event Zouk It Up with the Masters 2023
                will gather more than 100 dancers from 30 countries and
                territories including ....
              </div>
              <div class="quick-intro-text">
                The four-day event, the biggest of its kind in the country, will
                welcome the appearance of 3 world’s top Brazillian Zouk dancers.
              </div>
              <div class="quick-intro-text">
                Alongside, participants can attend ... hour workshops and
                ...hour social parties during the event.
              </div>
              <div>
                Every night, a line-up of DJs from ... and Vietnam will turn the
                dance halls into amazing parties.
              </div>
              <div>
                Forget the city, forget work and enjoy to the fullest - You
                surely will never forget the special 4-day and 3-night event
                with us.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="schedule-section">
        <hr />
        <div class="section-title">SCHEDULE</div>
        <div class="schedule-container">
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">14</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-activities">
                <div>8:00 PM - 2:00 AM (+1): Pre-Party - HANOI, VIETNAM</div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">15</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-activities">
                <div>10:00 AM - 6:00 PM: Workshop - HANOI, VIETNAM</div>
                <div>8:00 PM - 2:00 AM (+1): Social Party - HANOI, VIETNAM</div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">16</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-activities">
                <div>10:00 AM - 6:00 PM: Workshop - HANOI, VIETNAM</div>
                <div>8:00 PM - 2:00 AM (+1): Social Party - HANOI, VIETNAM</div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">17</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-activities">
                <div>12:00 PM: Check-out</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div id="activities-section">
        <div class="section-title">ACTIVITIES SUMMARY</div>
        <div class="activities-content">
          <div class="activities-text">
            - Attend Workshops: Learn useful Tips & Tricks from the Brazilian
            Zouk Masters
          </div>
          <div>
            - Social Dance Parties: Immerge in the music, and dance till your
            legs off
          </div>
          <div>
            - Network with Zouk-Addict: Expand your Network all over the world
            with fun and excitement
          </div>
        </div>
      </div>
      <hr />
      <div id="venue-section">
        <div class="section-title">VENUE</div>
        <div class="venue-container">
          <div class="venue-content">
            <div class="venue-content-header">
              Tan Da Spa Resort - Van Hoa, Ba Vi, Hanoi, Vietnam
            </div>
            <div class="venue-content-text">
              The resort is within easy reach by a sixty-minute drive from
              Hanoi, and only one and a half hours drive away from Noi Bai
              International Airport.
            </div>
            <div>
              Two clusters which consist of 85 rooms facing Suoi Bon lake view
              or green garden and share a traditional Tonkin-styled design,
              providing a great level of comfort while presenting a modern
              standard of Vietnamese luxury.
            </div>
            <div>
              What the resort has to offer includes a wide selection of
              pampering services. Stimulate the senses with rejuvenating
              treatments for mind and body at the Spa or recharge in the outdoor
              swimming pool, indoor heated pool with Sauna, and Jacuzzi. Mud
              bathing, soaking in aromatherapy with the stream, kayaking, etc
              are also provided.
            </div>
            <div>
              The resort is also home to 3 restaurants, 2 bars, and 1 cafe'. The
              restaurant serves an extensive selection of Vietnamese cuisine and
              fresh tropical fruits. The bar is a wonderful choice for you to
              savor refreshing beverages and cocktails with pairing light
              snacks.
            </div>
            <div>https://tandasparesort.com.vn/</div>
          </div>

          <div class="venue-carousel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    src="../assets/venue/venue-1.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    src="../assets/venue/venue-5.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    src="../assets/venue/venue-3.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <hr />
      <div id="artists-section">
        <div class="section-title">ARTISTS</div>
        <div>
          The triple features experienced professionals for teaching Brazilian
          Zouk around the world, which come from different backgrounds but hold
          the same high level of passion regarding their teaching job. From
          their experience and skills everyone will have the opportunity to
          learn something useful.
        </div>
        <div class="artist-container">
          <div>
            <div class="artist-name">1. ALISSON SANDI</div>
            <img class="artist-img" src="../assets/artists/1. Alisson.jpg" />
          </div>
          <div>
            <div class="artist-name">2. BRENDA CARVALHO</div>
            <img class="artist-img" src="../assets/artists/2. Brenda.jpg" />
          </div>
          <div>
            <div class="artist-name">3. GUI PRADA</div>
            <img class="artist-img" src="../assets/artists/3. Gui.jpg" />
          </div>
        </div>
      </div>
      <hr />
      <div id="passes-section">
        <div class="section-title">BUY 5 FULL PASSES FOR THE PRICE OF 4???</div>
        <div class="passes-container">
          <div class="passes-img">
            <img class="passes-img" src="../assets/passes/passes-1.png" />
          </div>
          <div class="passes-content">
            <div class="passes-content-header">Get the Ticket.</div>
            <div class="passes-content-header">Payment.</div>
            <div class="passes-content-text">
              For room booking, please contact the resort at: ... or when you
              arrive. Remember to use the code "PTZ" to get the best deal.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="about-ptz-section">
        <div class="section-title">ABOUT PTZ</div>
        <div>
          PTZ (Phuong & Trang Zouk Vietnam) is a dance club founded in 2019 by
          Phuong & Trang who is dedicated and passionate about Brazilian Zouk.
        </div>
        <div>
          With the desire to inspire diverse audiences and build the Zouk
          Community in Vietnam to become stronger, the two dancers have been
          teaching Zouk in Hanoi and making efforts to bring lots of wonderful
          opportunities for not only local Zoukers but also Zoukers all over the
          nation to connect, take part in Brazilian Zouk events with high
          standards and create the amazing dance scene for everyone sharing the
          same interest in dancing.
        </div>
      </div>
    </body>

    <b-button variant="success" class="book-now">Book now!</b-button>
    <div id="app" v-cloak class="back-to-top">
      <transition name="fade">
        <div
          id="pagetop"
          class="fixed right-0 bottom-0"
          v-show="scY > 100"
          @click="toTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a5568"
            stroke-width="1"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <div>Back To Top</div>
        </div>
      </transition>
    </div>
    <footer class="footer-section">
      <hr />
      <div class="section-title">SUBSCRIBE TO OUR NEWSLETTER</div>
      <div class="footer-container">
        <div id="subscribe-section">
          <div>
            ALL INFORMATION AND UPDATED, DIRECTLY TO YOU INBOX
            <div>
              Your email address
              <input class="subscribe-section-input" /><button
                class="subscribe-section-button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div id="contact-channel-section">
          <div>
            <i class="fa-brands fa-facebook"></i>
            https://www.facebook.com/PhuongTrangZoukVietnam
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i>
            https://www.instagram.com/phuongtrangzouk
          </div>
          <div>
            <i class="fa-brands fa-youtube"></i>
            https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA
          </div>
          <div>
            <i class="fa-brands fa-tiktok"></i> www.tiktok.com/@ptz_zouk
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import countdownClock from "./CountdownClock.vue";

export default {
  // components: {
  //   countdownClock,
  // },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}

.nav-bar {
  position: absolute;
  top: 20px;
  right: 40px;
}

.nav-bar-item {
  text-decoration: none;
  margin: 0px 20px;
  color: white;
  font-size: 20px;
}

.main-banner-container {
  position: relative;
  text-align: center;
  color: #6305a6;
}
.main-banner-img {
  width: 100%;
  height: 650px;
}

.main-banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 500%;
  width: 80%;
  font-weight: 700;
}

.main-banner-subtitle {
  font-size: 70%;
  color: white;
  font-weight: 500;
}

.body-container {
  width: 90%;
  margin: auto !important;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #6305a6;
  margin-top: 30px;
}

.quick-intro-section {
  top: 130%;
  left: 30%;
  font-size: 20px;
}

.quick-intro-content {
  width: 67%;
  margin: auto;
  text-align: justify;
  padding: 30px 0px;
}

#schedule-section {
  background-color: #ebd8f9;
}

.schedule-plan {
  display: flex;
  justify-content: space-around;
  text-align: left;
}

.schedule-plan-time {
  margin-left: 350px;
  margin-bottom: 20px;
}
.schedule-plan-time-date {
  font-size: 50px;
  font-weight: 700;
}

.schedule-plan-time-month {
  font-weight: 600;
  text-align: center;
}

.schedule-plan-activities {
  margin-top: 30px;
  margin-left: 50px;
  width: 800px;
}

.schedule-plan-line {
  width: 60%;
  margin: auto;
  border: 2px solid;
  background-color: #6305a6;
}

.activities-content {
  margin: 30px 0px;
}

.venue-container {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin: 30px 0px;
}
.venue-content {
  width: 500px;
  text-align: justify;
}
.venue-carousel {
  margin-left: 80px;
  width: 600px;
  height: 400px;
}
.artist-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100% !important;
}

.artist-name {
  font-weight: 700;
}
.artist-img {
  width: 300px;
  height: 300px;
}
.passes-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}

.passes-img {
  width: 300px;
  height: 300px;
}

.passes-content {
  font-size: 30px;
  width: 600px;
}
.passes-content-header {
  font-weight: 700;
}
.passes-content-text {
  font-size: 20px;
}

.footer-section {
  background-color: #d7bcea;
}
.footer-container {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: space-around;
}
.subscribe-section-input {
  border: none;
}
.subscribe-section-button {
  border: none;
  margin-left: 10px;
}
.back-to-top {
  position: fixed;
  cursor: pointer;
  float: right;
  right: 0px;
  top: 90%;
  width: 5%;
  font-size: 12px;
}
.book-now {
  position: fixed;
  cursor: pointer;
  float: left;
  left: 0px;
  top: 90%;
  width: 5%;
  font-size: 15px;
}
</style>
