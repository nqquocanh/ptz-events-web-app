<template>
  <div class="body-container">
    <div>
      <div class="section-title">PAST EVENTS</div>
    </div>
    <div>
      <div class="d-flex">
        <div class="pl-4 w-100">
          <div v-for="event in pastEventsInfo" :key="event.key" class="p-2">
            <div class="card p-4">
              <h3>{{ event.title }}</h3>
              <p>{{ event.time }}</p>
              <button type="button" class="btn btn-warning">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "PastEvents",
  data: function () {
    return {
      pastEventsInfo: [
        { key: 1, title: "Past Events 1", time: "2023", link: "/pass-event-1" },
        {
          key: 2,
          title: "Past Events 2",
          time: "2023",
          link: "/pass-event-2",
        },
        {
          key: 3,
          title: "Past Events 3",
          time: "2023",
          link: "/pass-event-3",
        },
        {
          key: 4,
          title: "Past Events 4",
          time: "2023",
          link: "/pass-event-4",
        },
      ],
    };
  },
  methods: {
    renderPastEvents() {
      for (let i = 0; i < this.pastEventsInfo.length; i++) {
        const event = this.pastEventsInfo[i];
        console.log(event.title, event.time);
      }
    },
  },
  mounted() {
    this.renderPastEvents;
  },
};
</script>
