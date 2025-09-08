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
                  <p class="fs-4 fw-bold text-left">{{ event.title }}</p>
                  <div>
                    <p style="text-align: justify">{{ event.description }}</p>
                  </div>
                </b-col>
              </b-row>
            </div>

            <!-- Countdown -->
            <div class="pt-5">
              <div
                v-if="event.countdownTimer"
                class="py-2 m-auto rounded-0 text-white d-flex justify-space-between row fs-5"
                style="background-color: #b867cc"
              >
                <div class="col">
                  <div>
                    <span>{{ event.countdownTimer.days }}</span>
                  </div>
                  <div><span>Days</span></div>
                </div>
                <div class="col">
                  <div>
                    <span>{{ event.countdownTimer.hours }}</span>
                  </div>
                  <div><span>Hours</span></div>
                </div>
                <div class="col">
                  <div>
                    <span>{{ event.countdownTimer.minutes }}</span>
                  </div>
                  <div><span>Minutes</span></div>
                </div>
                <div class="col">
                  <div>
                    <span>{{ event.countdownTimer.seconds }}</span>
                  </div>
                  <div><span>Seconds</span></div>
                </div>
              </div>
              <div
                v-else
                class="py-2 m-auto rounded-0 text-white d-flex justify-content-center fs-5"
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
import TransferMoney from "@/components/modal/TransferMoney.vue";

export default {
  name: "UpcomingEvents",
  components: {
    TransferMoney,
  },
  data() {
    return {
      upcomingEventsInfo: [
        {
          key: 1,
          title: "LAMBADA MASTERY - VIETNAM EDITION",
          imgSrc: new URL(
            "@/assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg",
            import.meta.url
          ).href,
          description: `𝗔 𝗵𝗶𝘀𝘁𝗼𝗿𝗶𝗰 𝗺𝗼𝗺𝗲𝗻𝘁 𝗳𝗼𝗿 𝗟𝗮𝗺𝗯𝗮𝗱𝗮 𝗹𝗼𝘃𝗲𝗿𝘀! For the very first time in Asia, 𝙇𝙖𝙢𝙗𝙖𝙙𝙖 𝙈𝙖𝙨𝙩𝙚𝙧𝙮 𝙘𝙤𝙢𝙚𝙨 𝙩𝙤 𝙑𝙞𝙚𝙩𝙣𝙖𝙢! Immerse yourself in a 7-day retreat filled with intensive workshops, social parties, and unforgettable cultural vibes.
This is your chance to master the structure of Lambada – from basics to advanced variations – under the guidance of the world’s top instructors.`,
          time: "21 Apr - 27 Apr, 2026",
          end: new Date("April 21, 2026 23:59:59"),
          countdownTimer: null,
          intervalId: null,
        },
      ],
    };
  },
  mounted() {
    this.startCountdownTimers();
  },
  beforeDestroy() {
    // clear interval khi component bị destroy
    this.upcomingEventsInfo.forEach((event) => {
      if (event.intervalId) clearInterval(event.intervalId);
    });
  },
  methods: {
    startCountdownTimers() {
      this.upcomingEventsInfo.forEach((event) => {
        event.intervalId = setInterval(() => {
          const now = new Date().getTime();
          const distance = event.end.getTime() - now;

          if (distance <= 0) {
            clearInterval(event.intervalId);
            event.countdownTimer = null;
            return;
          }

          event.countdownTimer = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          };
        }, 1000);
      });
    },
  },
};
</script>

<style>
@media (max-width: 425px) {
  .banner-title {
    width: 200%;
  }
}
</style>
