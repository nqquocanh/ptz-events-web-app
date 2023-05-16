<template>
  <div>
    <div class="section-title pb-4">UPCOMING EVENTS</div>
    <div class="d-flex" style="gap: 20px">
      <div>
        <img
          src="../../../public/assets/calendar/calendar.jpg"
          style="width: 400px; height: 400px"
        />
      </div>
      <div class="w-100">
        <div
          v-for="event in upcomingEventsInfo"
          :key="event.key"
          class="d-flex flex-column p-2"
        >
          <div class="card p-4" style="gap: 10px">
            <div>
              <div class="section-sub-title">{{ event.title }}</div>
              <div class="d-flex justify-content-between">
                <i class="fa-regular fa-clock"></i>
                <div>{{ event.time }}</div>
              </div>
              <button type="button" class="btn btn-warning">See More</button>
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
        { key: 1, title: "Upcoming Events 1", time: "2023" },
        {
          key: 2,
          title: "Upcoming Events 2",
          time: "2023",
        },
      ],
    };
  },
};
</script>
