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
            <div class="d-flex gap-3 pt-4 column-width">
              <b-row class="column-width">
                <b-col lg="8" md="6" sm="6">
                  <img :src="event.imgSrc" class="img-fluid" />
                </b-col>
                <b-col lg="4" md="6" sm="6">
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
                        :to="`/upcoming-event-${event.key}`"
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
                </b-col>
              </b-row>
            </div>
            <div class="pt-5">
              <div
                v-if="event.countdownTimer"
                class="py-2 m-auto rounded-0 text-white d-flex justify-space-between row fs-5"
                style="background-color: #b867cc"
              >
                <div style="gap: 20vh" class="col">
                  <div>
                    <span>{{ event.countdownTimer.days }}</span>
                  </div>
                  <div>
                    <span>Days</span>
                  </div>
                </div>
                <div style="gap: 20vh" class="col">
                  <div>
                    <span>{{ event.countdownTimer.hours }}</span>
                  </div>
                  <div>
                    <span>Hours</span>
                  </div>
                </div>
                <div style="gap: 20vh" class="col">
                  <div>
                    <span>{{ event.countdownTimer.minutes }}</span>
                  </div>
                  <div>
                    <span>Minutes</span>
                  </div>
                </div>
                <div style="gap: 20vh" class="col">
                  <div>
                    <span>{{ event.countdownTimer.seconds }}</span>
                  </div>
                  <div>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="py-2 m-auto rounded-0 text-white d-flex justify-space-between row fs-5"
                style="background-color: #b867cc"
              >
                <p class="pt-3">Countdown expired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transferMoney from "../../components/modal/TransferMoney.vue";
export default {
  name: "UpcomingEvents",
  components: transferMoney,
  data() {
    return {
      upcomingEventsInfo: [
        {
          key: 2,
          title: "BRAZILIAN ZOUK - LUAN & ADRIANA",
          imgSrc: require("../../assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg"),
          description: `Luan & Adriana bring 15 years of ballroom dancing experience to their teaching. They are highly respected Zouk instructors at both national and international congresses. They are two-time World Lambada champions, Brazilian 🇧🇷 Latin Dance champions, and Regional Ballroom Dancing champions. Additionally, they serve as coaches, speakers, and emotional intelligence trainers at the Lyouman Institute, and are the creative minds behind several notable initiatives integrating dance and emotional intelligence.`,
          time: "21 - 26 August, 2024",
          end: new Date("August 21, 2024"),
          countdownTimer: null,
        },
      ],
    };
  },
  mounted() {
    this.startCountdownTimers();
  },
  methods: {
    startCountdownTimers() {
      this.upcomingEventsInfo.forEach((event) => {
        event.countdownTimer = setInterval(() => {
          let now = new Date().getTime();
          let distance = event.end.getTime() - now;

          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          event.countdownTimer = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          };

          if (distance < 0) {
            clearInterval(event.countdownTimer);
            event.countdownTimer = null;
          }
        }, 1000);
      });
    },
  },
};
</script>
<style>
@media (max-width: 425px) {
  .banner-tittle {
    width: 200%;
  }
}
</style>
