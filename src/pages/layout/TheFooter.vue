<template>
  <footer
    class="text-white"
    style="background-image: linear-gradient(rgb(184, 103, 204), #432955)"
  >
    <hr class="footer-line" />
    <div class="pb-4">
      <div id="contact-channel-section">
        <div class="section-sub-title">OUR CONTACT CHANNELS</div>
        <div
          class="d-flex justify-content-center"
          style="font-size: 20px; gap: 20px"
        >
          <div v-for="channel in contactChannels" :key="channel.key">
            <a :href="channel.ref" target="_blank">
              <i :class="channel.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      contactChannels: [
        {
          key: 1,
          ref: "https://www.facebook.com/PhuongTrangZoukVietnam",
          icon: "fa-brands fa-facebook text-white",
        },
        {
          key: 2,
          ref: "https://www.instagram.com/phuongtrangzouk",
          icon: "fa-brands fa-instagram text-white",
        },
        {
          key: 3,
          ref: "https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA",
          icon: "fa-brands fa-youtube text-white",
        },
        {
          key: 4,
          ref: "https://www.tiktok.com/@ptz_zouk",
          icon: "fa-brands fa-tiktok text-white",
        },
      ],
    };
  },
};
</script>
