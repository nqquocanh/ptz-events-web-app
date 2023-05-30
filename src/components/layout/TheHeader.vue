<template>
  <div>
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
          <a class="text-decoration-none" style="color: #b867cc">Home</a>
        </router-link>
        <div class="dropdown text-primary" role="button">
          <div
            class="dropdown-toggle cursor"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="color: #b867cc"
          >
            Upcoming Events
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <router-link to="/upcoming-event-1" style="text-decoration: none">
              <li><a class="dropdown-item" href="#">Fly with Lambada</a></li>
            </router-link>
            <li><a class="dropdown-item" href="#">Upcoming Event 2</a></li>
            <li><a class="dropdown-item" href="#">Upcoming Event 3</a></li>
          </ul>
        </div>
        <router-link to="/past-events" style="text-decoration: none">
          <a class="text-decoration-none" style="color: #b867cc">Past Events</a>
        </router-link>
      </div>
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
