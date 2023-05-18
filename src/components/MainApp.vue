<template>
  <div>
    <div class="body-container">
      <UpcomingEvents />
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
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="/assets/about-ptz/about-ptz-1-min.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/assets/about-ptz/about-ptz-2-min.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/assets/about-ptz/about-ptz-3-min.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/assets/about-ptz/about-ptz-4-min.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
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
    </div>
  </div>
</template>
<script>
import UpcomingEvents from "./upcoming-events/UpcomingEvents.vue";
export default {
  components: { UpcomingEvents },
  name: "MainApp",
  data() {
    return {};
  },
};
</script>
