<template>
  <div>
    <div class="pb-1 position-relative">
      <router-link to="/" style="text-decoration: none">
        <img
          style="width: 120px; height: 50px"
          src="@/assets/img/logo/logo.png"
      /></router-link>
      <div class="screen-small position-absolute top-0 end-0 mt-2 mr-2">
        <b-dropdown id="dropdown-right" right variant="outline-secondary">
          <b-dropdown-item href="/" variant="outline-secondary"
            >Home</b-dropdown-item
          >
          <b-dropdown-divider />
          <b-dropdown-group id="dropdown-group-1" header="Upcoming Events">
            <router-link to="/upcoming-event-2" style="text-decoration: none">
              <li>
                <a class="dropdown-item" href="#"
                  >Romance & Joy with BraZouk & Lambada</a
                >
              </li>
            </router-link>
          </b-dropdown-group>
          <b-dropdown-divider />
          <b-dropdown-group id="dropdown-group-1" header="Past Events">
            <router-link to="/past-events/2024" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2024</a></li>
            </router-link>
            <router-link to="/past-events/2023" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2023</a></li>
            </router-link>
            <router-link to="/past-events/2022" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2022</a></li>
            </router-link>
          </b-dropdown-group>
        </b-dropdown>
      </div>
    </div>

    <div style="overflow: visible" class="screen-large">
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
            <!-- <router-link to="/upcoming-event-2" style="text-decoration: none">
              <li>
                <a class="dropdown-item" href="#"
                  >Romance & Joy with BraZouk & Lambada</a
                >
              </li>
            </router-link> -->
            <div class="text-center">Coming soon</div>
          </ul>
        </div>
        <div class="dropdown text-primary" role="button">
          <div
            class="dropdown-toggle cursor"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="color: #b867cc"
          >
            Past Events
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <router-link to="/past-events/2024" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2024</a></li>
            </router-link>
            <router-link to="/past-events/2023" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2023</a></li>
            </router-link>
            <router-link to="/past-events/2022" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">2022</a></li>
            </router-link>
          </ul>
        </div>
        <div class="dropdown text-primary" role="button">
          <div
            class="dropdown-toggle cursor"
            id="dropdownMenuButton3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="color: #b867cc"
          >
            DJs
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            <router-link to="/djs/DJ-TK" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">DJ TK</a></li>
            </router-link>
            <router-link to="/djs/DJ-AnhQ" style="text-decoration: none">
              <li><a class="dropdown-item text-center" href="#">DJ AnhQ</a></li>
            </router-link>
          </ul>
        </div>
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
    //handle nested nav items
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-1") {
        this.isDropdown2Visible = true;
      }
    });
    this.$root.$on("bv::dropdown::hide", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-1") {
        this.isDropdown2Visible = false;
      }
      if (this.isDropdown2Visible) {
        bvEvent.preventDefault();
      }
    });
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = true;
      }
    });
    this.$root.$on("bv::dropdown::hide", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = false;
      }
      if (this.isDropdown2Visible) {
        bvEvent.preventDefault();
      }
    });
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
<style scoped>
.screen-small {
  display: none;
}
.screen-large {
  display: block;
}

@media (max-width: 450px) {
  .screen-small {
    display: block;
  }
  .screen-large {
    display: none;
  }
}
</style>
