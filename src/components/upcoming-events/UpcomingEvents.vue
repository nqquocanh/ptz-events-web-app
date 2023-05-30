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
              class="card text-white fs-4 p-3 w-50 m-auto rounded-0"
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
                    <button
                      type="button"
                      class="btn text-white"
                      style="background-color: #b867cc"
                    >
                      Get Your Ticket Now
                    </button>
                    <router-link
                      to="/upcoming-event-1"
                      style="text-decoration: none"
                    >
                      <button
                        type="button"
                        class="btn btn-white border border-dark"
                        style="border-color: black"
                      >
                        See More
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <countdown :time="countdownTime()">
                <template slot-scope="props">
                  <div
                    class="py-2 m-auto rounded-0 text-white"
                    style="background-color: #b867cc"
                  >
                    <div
                      class="d-flex justify-content-center fs-5"
                      style="gap: 20vh"
                    >
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
                        <div>minutes</div>
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
import transferMoney from "../modal/transfer-money.vue";
export default {
  name: "UpcomingEvents",
  components: transferMoney,
  data() {
    return {
      upcomingEventsInfo: [
        {
          key: 1,
          title: "FLY WITH LAMBADA SENSATION",
          imgSrc: require("../../assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg"),
          description: `Following the success of the event in April, this coming August, PTZ will continue to bring to the Zouk Community in Vietnam wonderful experiences with Lambada dance. All Lambada's foundation techniques, advanced dance moves, wifi gameplay will be revealed at our event - “Fly with Lambada Sensation” with the participation of 2 top artists, Gilson and Mailys.`,
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
  },
};
</script>
