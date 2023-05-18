<template>
  <div>
    <div class="section-title pb-4">UPCOMING EVENTS</div>
    <div class="d-flex" style="gap: 20px">
      <div class="w-100">
        <div
          v-for="event in upcomingEventsInfo"
          :key="event.key"
          class="d-flex flex-column p-2"
        >
          <div class="card p-4" style="gap: 10px">
            <div class="d-flex gap-4">
              <div>
                <img :src="event.imgSrc" style="width: 500px; height: 300px" />
              </div>
              <div>
                <div class="section-sub-title">{{ event.title }}</div>
                <div>
                  <p style="text-align: justify">{{ event.description }}</p>
                  <button type="button" class="btn btn-warning">
                    See More
                  </button>
                </div>
              </div>
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
          title: "Fly with Lambada Sensation",
          imgSrc: require("../../assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg"),
          description: `Following the success of the event in April, this coming August, PTZ will continue to bring to the Zouk Community in Vietnam wonderful experiences with Lambada dance. All Lambada's foundation techniques, advanced dance moves, wifi gameplay will be revealed at our event - “Fly with Lambada Sensation” with the participation of 2 top artists, Gilson and Mailys . Gilson is known as "Lambada guru - The veteran artist of Lambada village" in the world. Coming to the event, you will understand why Lambada is loved and "crazy" by so many people`,
        },
        {
          key: 2,
          title: "Upcoming Events 2",
          imgSrc: require("../../assets/img/upcoming-events/upcoming-event-01/upcoming-event-01.jpg"),
          description: `Following the success of the event in April, this coming August, PTZ will continue to bring to the Zouk Community in Vietnam wonderful experiences with Lambada dance. All Lambada's foundation techniques, advanced dance moves, wifi gameplay will be revealed at our event - “Fly with Lambada Sensation” with the participation of 2 top artists, Gilson and Mailys . Gilson is known as "Lambada guru - The veteran artist of Lambada village" in the world. Coming to the event, you will understand why Lambada is loved and "crazy" by so many people`,
        },
      ],
    };
  },
};
</script>
