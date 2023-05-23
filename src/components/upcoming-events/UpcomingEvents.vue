<template>
  <div class="pt-5">
    <div class="section-title pb-4">UPCOMING EVENTS</div>
    <div class="d-flex" style="gap: 20px">
      <div class="w-100">
        <div
          v-for="event in upcomingEventsInfo"
          :key="event.key"
          class="d-flex flex-column p-2"
        >
          <div class="card p-4" style="gap: 10px">
            <div
              class="card text-white fs-4 p-3 w-50 m-auto"
              style="background-color: #b867cc"
            >
              {{ event.time }}
            </div>
            <div class="d-flex gap-5 pt-4">
              <div>
                <img :src="event.imgSrc" style="width: 500px; height: 300px" />
              </div>
              <div>
                <p class="fs-4 fw-bold text-left" style="text-align: left">
                  {{ event.title }}
                </p>
                <br />
                <div>
                  <p style="text-align: justify">{{ event.description }}</p>
                  <div class="d-flex gap-2">
                    <button type="button" class="btn btn-primary">
                      Get Your Ticket Now
                    </button>
                    <button type="button" class="btn btn-warning">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-2">
              <countdown :time="countdownTime()">
                <template slot-scope="props">
                  <div
                    class="py-2 border border-dark m-auto rounded text-white"
                    style="background-color: #b867cc"
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpcomingEvents",
  data() {
    return {
      upcomingEventsInfo: [
        {
          key: 1,
          title: "FLY WITH LAMBADA SENSATION",
          imgSrc: require("../../assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg"),
          description: `Following the success of the event in April, this coming August, PTZ will continue to bring to the Zouk Community in Vietnam wonderful experiences with Lambada dance. All Lambada's foundation techniques, advanced dance moves, wifi gameplay will be revealed at our event - “Fly with Lambada Sensation” with the participation of 2 top artists, Gilson and Mailys . Gilson is known as "Lambada guru - The veteran artist of Lambada village" in the world. Coming to the event, you will understand why Lambada is loved and "crazy" by so many people`,
          time: "2 - 7 August, 2023",
        },
      ],
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
    // handleScroll: function () {
    //   if (this.scTimer) return;
    //   this.scTimer = setTimeout(() => {
    //     this.scY = window.scrollY;
    //     clearTimeout(this.scTimer);
    //     this.scTimer = 0;
    //   }, 100);
    // },
    // toTop: function () {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // },
  },
};
</script>
