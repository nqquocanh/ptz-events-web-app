<template>
  <div>
    <header>
      <div class="logo-header">
        <div><img class="logo" src="../assets/banner/logo.png" /></div>
      </div>
      <div class="main-banner-container">
        <img class="main-banner-img" />
        <div class="main-banner-title">
          <div>
            <div>ZOUK IT UP</div>
            <div>WITH THE MASTERS</div>
          </div>
          <div class="main-banner-subtitle">
            <div class="main-banner-subtitle-date">2023 APRIL 14-15-16-17</div>
            <countdown :time="90 * 24 * 60 * 60 * 1000">
              <template slot-scope="props">
                <div class="countdown-clock">
                  <div class="countdown-time">
                    <div>
                      <div class="countdown-time-number">{{ props.days }}</div>
                      <div class="countdown-time-unit">days</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">{{ props.hours }}</div>
                      <div class="countdown-time-unit">hours</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">
                        {{ props.minutes }}
                      </div>
                      <div class="countdown-time-unit">minutes</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">
                        {{ props.seconds }}
                      </div>
                      <div class="countdown-time-unit">seconds</div>
                    </div>
                  </div>
                </div>
              </template>
            </countdown>
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
              <div class="section-text">
                Taking place at a wonderful resort about 1-hour drive from Hanoi
                CBD, Zouk It Up with the Masters 2023 will host more than 100
                zoukers from 20 countries. The very first time such an event
                happening in Vietnam and the very first time after Covid, such
                an event is organized in South East Asia.
              </div>
              <div class="section-text">
                Spreading from 14th to 17th April, Zouk It Up will have 12 hours
                of workshops and 24 hours of parties with top-notched DJs in the
                region.
              </div>
              <div class="section-text">
                Tan Da is a beautiful resort hidden in the charms of the Ba Vi
                mountains. In the resort, participants can enjoy such leisure
                activities as kayaking, swimming, sauna, swan-boating, BBQ,
                inter alia. The resort provides for a tranquil and peaceful
                atmosphere.
              </div>
              <div class="section-text">
                Wait no more. Save the dates! Book your flights and join us!
                Let's dance our legs off!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="schedule-section">
        <hr />
        <div class="section-title">EVENT SCHEDULE</div>
        <div class="schedule-container">
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">14</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="line-event-schedule" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Pre-Party - Tan Da resort
                </div>
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
              <div class="line-event-schedule" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 10:00 AM - 6:00 PM:
                  Workshop - Tan Da resort
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Social Party - Tan Da resort
                </div>
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
              <div class="line-event-schedule" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 10:00 AM - 6:00 PM:
                  Workshop - Tan Da resort
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Social Party - Tan Da resort
                </div>
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
              <div class="line-event-schedule" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 12:00 PM: Check-out
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div id="activities-section">
        <div class="section-title">ACTIVITIES SUMMARY</div>
        <div class="activities-content">
          <div>
            <img
              class="activities-img"
              src="../assets/activities/1. Learn.png"
            />
            <div class="section-text">
              <strong>Learn:</strong> 12 hours of workshops delivered by three
              masters: Alisson, Brenda and Gui
            </div>
          </div>
          <div>
            <img
              class="activities-img"
              src="../assets/activities/2. Play.png"
            />
            <div class="section-text">
              <strong>Play:</strong> Kayaking; swan-boating; swimming; biking;
              sauna, BBQ and more;
            </div>
          </div>
          <div>
            <img
              class="activities-img"
              src="../assets/activities/3. Network.png"
            />
            <div class="section-text">
              <strong>Network:</strong> Meet and mingle with Zoukers from 20
              countries;
            </div>
          </div>
          <div>
            <img
              class="activities-img"
              src="../assets/activities/4. Chill.png"
            />
            <div class="section-text">
              <strong>Chill:</strong> Enjoy the lakeview every sunrise and
              sunset
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="venue-section">
        <div class="section-title">VENUE</div>
        <div class="venue-container">
          <div class="venue-content">
            <div class="venue-sub-title">
              TAN DA SPA RESORT - VAN HOA, BA VI, HANOI, VIETNAM
            </div>
            <div class="section-text">
              The resort is within easy reach by a sixty-minute drive from Hanoi
              CBD, and only one and a half hour drive from Noi Bai International
              Airport.
            </div>
            <div class="section-text">
              The resort has 3 sections consisting of 98 rooms facing Suoi Bon
              lake or green garden and share a traditional Tonkin-styled design,
              providing a great level of comfort while presenting a modern
              standard of Vietnamese luxury.
            </div>
            <div class="section-text">
              What the resort has to offer includes a wide selection of
              pampering services. Stimulate the senses with rejuvenating
              treatments for mind and body at the Spa or recharge in the outdoor
              swimming pool, indoor heated pool with Sauna, and Jacuzzi. Mud
              bathing, soaking in aromatherapy with the stream, kayaking, etc
              are also provided.
            </div>
            <div class="section-text">
              The resort is also home to 3 restaurants, 2 bars, and 1 cafe'. The
              restaurant serves an extensive selection of Vietnamese cuisine and
              fresh tropical fruits. The bar is a wonderful choice for you to
              savor refreshing beverages and cocktails with pairing light
              snacks.
            </div>
            <a href="https://tandasparesort.com.vn/"
              >https://tandasparesort.com.vn/</a
            >
          </div>
        </div>
        <div>
          <b-row>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-1.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-2.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-3.jpg"
            /></b-col>
          </b-row>
          <br />
          <b-row>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-4.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-5.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="../assets/venue/venue-6.jpg"
            /></b-col>
          </b-row>
        </div>
      </div>
      <hr class="artist-line" />
      <div id="artists-section">
        <div class="section-title">ARTISTS</div>
        <div class="section-text">
          The triple features experienced professionals for teaching Brazilian
          Zouk around the world, which come from different backgrounds but hold
          the same high level of passion regarding their teaching job. From
          their experience and skills everyone will have the opportunity to
          learn something useful.
        </div>
        <div class="artist-container">
          <b-row>
            <b-col>
              <img class="artist-img" src="../assets/artists/1. Alisson.jpg" />
              <div class="section-sub-title">ALISSON SANDI</div></b-col
            >
            <b-col>
              <img class="artist-img" src="../assets/artists/2. Brenda.jpg" />
              <div class="section-sub-title">BRENDA CARVALHO</div></b-col
            >
            <b-col>
              <img class="artist-img" src="../assets/artists/3. Gui.jpg" />
              <div class="section-sub-title">GUI PRADA</div></b-col
            >
          </b-row>
        </div>
      </div>
      <hr />
      <div id="passes-section">
        <div class="section-title">BUY 5 FULL PASSES FOR THE PRICE OF 4???</div>
        <div class="passes-container">
          <!-- <div class="passes-img">
            <img class="passes-img" src="../assets/passes/passes-1.png" />
          </div> -->
          <div class="section-text">
            <div class="passes-sub-title" style="color: red">
              ONLY 100$ PER PAX
            </div>
            <div class="passes-sub-title">GET THE TICKET.</div>
            <div class="passes-sub-title">PAYMENT.</div>
            <div class="section-text">
              For room booking, please contact the resort at: ... or when you
              arrive.
            </div>
            <div class="section-text">
              Remember to use the code "PTZ" to get the best deal.
            </div>
            <div>
              <b-button
                class="passes-button"
                variant="success"
                v-b-modal.modal-xl
                >BOOK NOW!</b-button
              >
              <b-modal
                id="modal-xl"
                title="PAYMENT METHODS"
                ok-only
                hide-header-close
              >
                <div class="passes-popup">
                  <div class="section-sub-title">
                    <div class="passes-popup-title">1. BANK TRANSFER</div>
                    <img
                      class="passes-qr-code"
                      src="../assets/passes/qr-code.png"
                    />
                    <div class="passes-popup-title">2. PAY AT DOOR</div>
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="about-ptz-section">
        <div class="section-title">ABOUT PTZ</div>
        <div class="about-ptz-container">
          <div class="about-ptz-text">
            <div class="section-text">
              PTZ - Phuong & Trang Zouk Vietnam - is the leading studio for
              Brazilian Zouk in Hanoi, Vietnam. Founded in 2019, PTZ has been on
              the forefront of spreading Brazilian Zouk in the local community.
              PTZ offers weekly classes, social dancing and periodic Brazilian
              Zouk events. Our syllabus is regularly updated to keep abreast
              with the latest developments in the world. Our parties are spinned
              live and non-stop by our local DJs.
            </div>
            <div class="section-text">
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
            <div>
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
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="../assets/about-ptz/about-ptz-1.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="../assets/about-ptz/about-ptz-2.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="../assets/about-ptz/about-ptz-3.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="section-text">
              Hoai Phuong and Huyen Trang started their partnership in late
              2017. We are a couple of Friday night and Sunday morning. Trang is
              like a Friday night – always dynamic, vibrant, full of life with a
              beautiful smile on her face and very nice pose whenever she
              dances. Phuong is like a Sunday morning with a hot black coffee –
              slow to start, taking time to filter, but when the caffeine kicks
              in, he rocks as both a DJ and a dancer. That’s the way the
              partnership has gone over the past 5++ years.
            </div>
            <div class="section-text">
              Phuong and Trang won their first international trophy in 2018 with
              the 2nd place in the ProAm Competition at ZoukSEA. Since then,
              they have been performing in various congresses, both nationally,
              such as the Vietnam Latin Xperience, the Vietnam International
              Latin Festival, and internationally, like ZoukSensation and the
              1st China Zouk Congress in Shanghai. Phuong and Trang also taught
              workshops in multiple events at home and abroad.
            </div>
          </div>
        </div>
      </div>
    </body>

    <b-button variant="success" class="book-now" v-b-modal.modal-xl
      >BOOK NOW!</b-button
    >
    <footer class="footer-section">
      <hr class="footer-line" />
      <div class="footer-title">SUBSCRIBE TO OUR NEWSLETTER</div>
      <div class="footer-container">
        <!-- <div id="subscribe-section">
          <div class="section-sub-title">
            ALL UPDATED INFORMATION DIRECTLY TO YOUR INBOX
            <div class="text-media">
              Your email address
              <input class="subscribe-section-input" /><button
                class="subscribe-section-button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div> -->
        <div id="contact-channel-section">
          <div class="section-sub-title">OUR CONTACT CHANNELS</div>
          <div class="media">
            <div>
              <a
                href="https://www.facebook.com/PhuongTrangZoukVietnam"
                target="_blank"
              >
                <i class="fa-brands fa-facebook media-icons"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/phuongtrangzouk"
                target="_blank"
              >
                <i class="fa-brands fa-instagram media-icons"></i
              ></a>
            </div>
            <div>
              <a
                href="
            https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA"
                target="_blank"
              >
                <i class="fa-brands fa-youtube media-icons"></i>
              </a>
            </div>
            <div>
              <a
                href="
            www.tiktok.com/@ptz_zouk"
                target="_blank"
              >
                <i class="fa-brands fa-tiktok media-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
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
.logo-header {
  height: 55px;
  background-color: white;
}
.nav-bar {
  position: absolute;
  top: 20px;
  right: 40px;
}
.logo {
  top: 2px;
  margin: auto;
  width: 120px !important;
  height: 50px !important;
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
  color: white;
}
.main-banner-img {
  width: 100%;
  height: 750px;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/banner/main-banner.jpeg");
}
.main-banner-title {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 90px;
  width: 80%;
  font-weight: 300;
}
.main-banner-subtitle {
  font-size: 50px;
  color: white;
  font-weight: 100;
}
.main-banner-subtitle-date {
  margin-bottom: 30px;
}
.countdown-clock {
  margin: auto;
  width: 50%;
  padding: 10px;
  border: solid 2px;
}
.countdown-time {
  display: flex;
  justify-content: space-around;
}
.countdown-time-number {
  font-size: 50px;
  font-weight: 600;
}
.countdown-time-unit {
  font-size: 30px;
}
.body-container {
  width: 70%;
  margin: auto !important;
}
.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #6305a6;
  margin-top: 60px;
  margin-bottom: 20px;
}
.section-sub-title {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}
.section-text {
  margin: 15px 0px;
  font-size: 20px;
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
  background-image: linear-gradient(to left, #a459da, rgb(231, 195, 240));
}
.schedule-plan {
  display: flex;
  justify-content: space-around;
  text-align: left;
}
.schedule-plan-time {
  margin-left: 250px;
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
.line-event-schedule {
  border: 1px solid;
  background-color: #6305a6;
  height: 100px;
  margin-left: 20px;
  margin-top: 10px;
}
.schedule-plan-activities {
  margin-top: 30px;
  margin-left: 50px;
  width: 800px;
  font-size: 20px;
}
.schedule-plan-line {
  width: 60%;
  margin: auto;
  border: 1px solid;
  background-color: #6305a6;
}
.activities-content {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin: 30px 0px;
}
.activities-img {
  margin: 30px 0px;
  width: 250px;
}
.venue-container {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin: 30px 0px;
}
.venue-content {
  text-align: justify;
}
.venue-sub-title {
  font-size: 20px;
  font-weight: 700;
}
.venue-img {
  width: 100%;
}
.artist-line {
  margin-top: 30px;
}
.artist-container {
  margin-top: 20px;
}
.artist-img {
  width: 300px;
  height: 300px;
}
.passes-container {
  display: flex;
  justify-content: space-around;
}
/* .passes-img {
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
} */
.passes-content {
  font-size: 30px;
  width: 100%;
}
.passes-sub-title {
  font-weight: 700;
  margin: 20px auto;
}
.passes-button {
  margin: 20px auto;
}
.passes-text {
  font-size: 18px;
  margin: 30px auto;
}
.passes-popup {
  margin: auto;
  text-align: center;
}
.passes-qr-code {
  width: 300px;
}
.passes-popup-title {
  margin: 10px auto;
}
.about-ptz-container {
  display: flex;
  justify-content: space-between;
}
.about-ptz-text {
  text-align: justify;
}
.footer-line {
  margin-top: 30px;
}
.footer-section {
  background-image: linear-gradient(rgb(184, 103, 204), #432955);
  color: white;
}
.footer-title {
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-top: 60px;
  margin-bottom: 20px;
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
.text-media {
  font-weight: 500;
  font-size: 18px;
  margin-top: 20px;
}
.media {
  font-size: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
.media-icons {
  text-decoration: none;
  font-size: 25px;
  color: white;
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
  float: right;
  right: 20px;
  top: 90%;
  width: 5%;
  font-size: 15px;
}
</style>
