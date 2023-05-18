<template>
  <div class="pb-4">
    <div class="pb-1">
      <img
        style="width: 120px; height: 50px"
        src="@/assets/img/logo/logo.png"
      />
    </div>
    <div style="overflow: visible">
      <div
        class="d-flex justify-content-end gap-4 position-absolute p-4 text-white"
        style="right: 0"
      >
        <router-link to="/" style="text-decoration: none">
          <a class="text-decoration-none text-white">Home</a>
        </router-link>
        <div class="dropdown" role="button">
          <div
            class="btn-secondary dropdown-toggle cursor"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Upcoming Events
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Fly with Lambada</a></li>
            <li><a class="dropdown-item" href="#">Upcoming Event 2</a></li>
            <li><a class="dropdown-item" href="#">Upcoming Event 3</a></li>
          </ul>
        </div>
        <router-link to="/past-events" style="text-decoration: none">
          <a class="text-decoration-none text-white">Past Events</a>
        </router-link>
      </div>
    </div>
    <div class="text-white text-align-center">
      <div
        class="position-absolute"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
      >
        <div class="fs-1 p-2">PTZ - DANCE YOUR WAY</div>
        <div class="fs-1 p-2">BRAZILIAN ZOUK EVENTS & FESTIVAL</div>
        <div class="fs-4 p-2">Don't miss our latest dance event</div>
        <div class="fs-4">Aug 2-5 2023, Hanoi, Vietnam</div>
        <div class="fs-4 p-2 pb-4">Register Now!</div>
        <div>
          <countdown :time="countdownTime()">
            <template slot-scope="props">
              <div
                class="py-4 w-75 bg-transparent text-white border border-white m-auto rounded"
              >
                <div class="d-flex gap-4 justify-content-center fs-5">
                  <div>
                    <div>{{ props.days }}</div>
                    <div>days</div>
                  </div>
                  <div>
                    <div>{{ props.hours }}</div>
                    <div>hours</div>
                  </div>
                  <div>
                    <div>
                      {{ props.minutes }}
                    </div>
                    <div class="countdown-time-unit">minutes</div>
                  </div>
                  <div>
                    <div>
                      {{ props.seconds }}
                    </div>
                    <div>seconds</div>
                  </div>
                </div>
              </div>
            </template>
          </countdown>
        </div>
      </div>
      <img class="main-banner" />
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      scTimer: 0,
      scY: 0,
      end: new Date("August 2, 2023"),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    countdownTime() {
      let now = new Date();
      let distance = this.end - now;
      return distance;
    },
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
